import { FormEvent, useState } from 'react';

import Code from 'components/Code';
import Creator from 'components/Creator';
import Layout from 'components/Layout';
import { DEFAULT_VALUES } from 'constants/data';

export default function Home() {
    const [html, setHtml] = useState(DEFAULT_VALUES.html);

    const [name, setName] = useState('');
    const [selectedOption, setSelectedOption] = useState(DEFAULT_VALUES.option);
    const [options, setOptions] = useState('');
    const [validations, setValidations] = useState({ max: '', min: '', maxLength: '', pattern: '' });
    const [list, setList] = useState<{ id: number; type: string; name: string }[]>([
        { id: 1, type: 'text', name: 'Name' },
        { id: 2, type: 'email', name: 'Email Address' },
        { id: 3, type: 'tel', name: 'Mobile Number' }
    ]);

    const handleSelect = ({ label, value }: { label: string; value: string }) => setSelectedOption({ label, value });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setList((prev) => [...prev, { id: list.length + 1, type: selectedOption.value, name }]);
        if (selectedOption.value === 'select') {
            setHtml((prev) => `${prev}\n  <select name="${name}" value="${selectedOption.value}">`);
            options.split(',').forEach((option) => option && setHtml((prev) => `${prev}\n      <option value="${option}">${option}</option>`));
            setHtml((prev) => `${prev}\n  </select>`);
        } else if (selectedOption.value === 'radio') {
            options.split(',').forEach((option) => {
                if (option) {
                    setHtml((prev) => `${prev}\n  <label htmlFor="${option}">`);
                    setHtml((prev) => `${prev}\n      ${option} <input id="${option}" type="radio" name="${name}" value="${option}" />`);
                    setHtml((prev) => `${prev}\n  </label>`);
                }
            });
        } else {
            setHtml(
                (prev) =>
                    `${prev}\n  <input type="${selectedOption.value}" name="${name}" placeholder="${name}" min="${validations.min}" max="${validations.max}" maxLength="${validations.maxLength}" pattern="${validations.pattern}" />`
            );
        }

        setName(DEFAULT_VALUES.name);
        setSelectedOption(DEFAULT_VALUES.option);
        setValidations(DEFAULT_VALUES.validations);
        setOptions(DEFAULT_VALUES.options);
    };

    return (
        <main className="bg-[#F6F6F6] w-full min-h-screen flex justify-center items-center flex-col pt-10 font-mono p-5 ">
            <h1 className="text-5xl font-bold underline text-[#8785A2] mb-10">My Form Builder</h1>
            <h2 className="text-3xl text-[#FFC7C7] mb-10">Simple HTML Form Builder</h2>
            <div className="w-full min-h-[300px] lg:min-h-[500px] flex justify-center items-start gap-5 flex-wrap xl:flex-nowrap">
                <Layout list={list} setList={setList} />
                <Creator
                    name={name}
                    setName={setName}
                    options={options}
                    setOptions={setOptions}
                    validations={validations}
                    setValidations={setValidations}
                    selectedOption={selectedOption}
                    handleSelect={handleSelect}
                    handleSubmit={handleSubmit}
                />
                <Code html={html} />
            </div>
        </main>
    );
}
