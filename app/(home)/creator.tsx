'use client';

import { useCallback, useState } from 'react';

import { CustomizedCheckbox, CustomizedInput, CustomizedSelect, CustomizedTypography } from '@components';

import { useBoundStore } from '@zustand/store';

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
    const [isValidationVisible, setIsValidationVisible] = useState(false);

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
    const handleSelect = useCallback(({ label, value }: { label: string; value: string }) => setSelectedOption({ label, value }), [setSelectedOption]);
    const handleOptions = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setOptions(e.currentTarget.value), [setOptions]);
    const handleValidation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValidations({ ...validations, [e.currentTarget.name]: e.currentTarget.value }), [validations, setValidations]);

    return (
        <section className="w-full min-w-[400px] max-w-[500px] rounded-md border border-[#8785A2] p-5">
            <CustomizedTypography component="h3" className="mb-5 w-full text-center text-[20px] font-bold text-[#8785A2]">
                Creator
            </CustomizedTypography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <CustomizedInput label="NAME" name="name" placeholder="Please enter the name of input" value={name} onChange={handleChange} />
                <CustomizedSelect id="type" name="type" options={OPTIONS} selectedOption={selectedOption} onSelect={handleSelect} />
                {(selectedOption.value === 'select' || selectedOption.value === 'radio') && (
                    <>
                        <CustomizedInput label="OPTIONS" name="options" placeholder="Enter options separated by ," value={options} onChange={handleOptions} />
                        <CustomizedTypography component="small" className="mb-5 ml-2.5 mt-[-15px] block text-[10px] font-bold text-[#8785A2]">
                            옵션 값은 , 로 구분해주세요.
                        </CustomizedTypography>
                    </>
                )}
                <CustomizedCheckbox id="validation" name="validation" label="Show Validation" onChange={() => setIsValidationVisible((prev) => !prev)} />
                {isValidationVisible && (
                    <div className="mb-5 rounded-md border border-[#8785A2] p-5">
                        <CustomizedInput label="MAX" name="max" placeholder="" value={validations.max} onChange={handleValidation} />
                        <CustomizedInput label="MIN" name="min" placeholder="" value={validations.min} onChange={handleValidation} />
                        <CustomizedInput label="MAXLENGTH" name="maxLength" placeholder="" value={validations.maxLength} onChange={handleValidation} />
                        <CustomizedInput label="PATTERN" name="pattern" placeholder="" value={validations.pattern} onChange={handleValidation} />
                    </div>
                )}
                <button type="submit" className="mb-2.5 h-[50px] w-full cursor-pointer rounded-md bg-[#FFC7C7] font-semibold uppercase text-[#8785A2] hover:scale-95">
                    Create
                </button>
            </form>
        </section>
    );
}
