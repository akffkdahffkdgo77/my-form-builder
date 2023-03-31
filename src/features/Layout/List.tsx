import { ReactSortable } from 'react-sortablejs';

import ListItem from 'features/Layout/ListItem';
import { ListType } from 'lib/zustand/formSlice';
import { useBoundStore } from 'lib/zustand/store';

export default function List() {
    const { list, options, validations, setList, setHTML } = useBoundStore();

    const handleClick = (newState: ListType[]) => {
        setList(newState);
        let newHTML = `<form onSubmit={onSubmit}>`;
        newState.forEach((data) => {
            if (data.type === 'select') {
                newHTML += `\n  <select name="${data.name}" value="${data.type}">`;
                options.split(',').forEach((option) => {
                    if (option) {
                        newHTML += `\n      <option value="${option}">${option}</option>`;
                    }
                });
                newHTML += `\n  </select>`;
            } else if (data.type === 'radio') {
                options.split(',').forEach((option) => {
                    if (option) {
                        newHTML += `\n  <label htmlFor="${option}">`;
                        newHTML += `\n      ${option} <input id="${option}" type="radio" name="${data.name}" value="${option}" />`;
                        newHTML += `\n  </label>`;
                    }
                });
            } else {
                newHTML += `\n  <input type="${data.type}" name="${data.name}" placeholder="${data.name}" min="${validations.min}" max="${validations.max}" maxLength="${validations.maxLength}" pattern="${validations.pattern}" />`;
            }
        });
        setHTML(newHTML);
    };

    return (
        <ReactSortable list={list} setList={handleClick}>
            {list.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ReactSortable>
    );
}
