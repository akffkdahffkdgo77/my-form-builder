'use client';

import { ReactSortable } from 'react-sortablejs';

import CustomizedTypography from '@/components/customized-typography';

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { ListType } from '@zustand/formSlice';
import { useBoundStore } from '@zustand/store';

export default function DragNDrop() {
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
        <section className="min-h-[300px] w-full min-w-[300px] max-w-[500px] rounded-md border border-[#8785A2] p-5">
            <CustomizedTypography component="h3" className="mb-5 w-full text-center text-[20px] font-bold text-[#8785A2]">
                Layout
            </CustomizedTypography>
            <ReactSortable list={list} setList={handleClick}>
                {list.map((item) => (
                    <div
                        key={item.id}
                        className="mb-5 flex h-14 cursor-grab items-center rounded-md border border-[#FFC7C7] bg-[#FFE2E2] px-2.5 text-[16px] font-medium text-[#8785A2] [line-height:40px]"
                    >
                        <div className="mr-2.5 flex items-center">
                            <EllipsisVerticalIcon className="h-6 w-6" />
                            <EllipsisVerticalIcon className="ml-[-18px] h-6 w-6" />
                        </div>
                        {item.name}
                    </div>
                ))}
            </ReactSortable>
        </section>
    );
}
