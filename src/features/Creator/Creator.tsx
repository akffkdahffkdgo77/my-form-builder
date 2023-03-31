import { useCallback, useState } from 'react';

import Heading from 'components/Heading';
import Input from 'components/Input';
import Select from 'components/Select';
import Options from 'features/Creator/Options';
import Validation from 'features/Creator/Validation';
import { useBoundStore } from 'lib/zustand/store';

import SubmitButton from './SubmitButton';

const OPTIONS = [
    { value: 'text', label: 'Text' },
    { value: 'password', label: 'Password' },
    { value: 'email', label: 'Email' },
    { value: 'search', label: 'Search' },
    { value: 'number', label: 'Number' },
    { value: 'range', label: 'Range' },
    { value: 'date', label: 'Date' },
    { value: 'tel', label: 'Telephone' },
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'select', label: 'Select' },
    { value: 'radio', label: 'Radio' }
];

const DEFAULT_VALUES = {
    name: '',
    option: OPTIONS[0],
    options: '',
    validations: { max: '', min: '', maxLength: '', pattern: '' },
    html: `<form onSubmit={onSubmit}>\n  <input type="text" name="Name" placeholder="Name" />\n  <input type="email" name="Email Address" placeholder="Email Address" />\n  <input type="tel" name="Mobile Number" placeholder="Mobile Number" />`
};

export default function Creator() {
    const { list, html, validations, options, setOptions, setValidations, setList, setHTML } = useBoundStore();

    const [name, setName] = useState('');
    const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

    const handleSelect = ({ label, value }: { label: string; value: string }) => setSelectedOption({ label, value });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setList([...list, { id: list.length + 1, type: selectedOption.value, name, ...validations, options }]);
        if (selectedOption.value === 'select') {
            setHTML(`${html}\n  <select name="${name}" value="${selectedOption.value}">`);
            options.split(',').forEach((option) => option && setHTML(`${html}\n      <option value="${option}">${option}</option>`));
            setHTML(`${html}\n  </select>`);
        } else if (selectedOption.value === 'radio') {
            options.split(',').forEach((option) => {
                if (option) {
                    setHTML(`${html}\n  <label htmlFor="${option}">`);
                    setHTML(`${html}\n      ${option} <input id="${option}" type="radio" name="${name}" value="${option}" />`);
                    setHTML(`${html}\n  </label>`);
                }
            });
        } else {
            setHTML(
                `${html}\n  <input type="${selectedOption.value}" name="${name}" placeholder="${name}" min="${validations.min}" max="${validations.max}" maxLength="${validations.maxLength}" pattern="${validations.pattern}" />`
            );
        }

        setName(DEFAULT_VALUES.name);
        setSelectedOption(DEFAULT_VALUES.option);
        setValidations(DEFAULT_VALUES.validations);
        setOptions(DEFAULT_VALUES.options);
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value), [setName]);

    return (
        <section className="border border-[#8785A2] min-w-[400px] max-w-[500px] w-full rounded-md p-5">
            <Heading text="Creator" />
            <form onSubmit={handleSubmit}>
                <Input label="NAME" name="name" placeholder="Please enter the name of input" value={name} onChange={handleChange} />
                <Select id="type" name="type" options={OPTIONS} selectedOption={selectedOption} onSelect={handleSelect} />
                {(selectedOption.value === 'select' || selectedOption.value === 'radio') && <Options />}
                <Validation />
                <SubmitButton />
            </form>
        </section>
    );
}
