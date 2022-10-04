import { FormEvent, useState } from 'react';

import Code from 'components/Code';
import Creator from 'components/Creator';
import Layout from 'components/Layout';
import { OPTIONS } from 'constants/data';

const defaultHTML = ` <input type="text" name="Name" placeholder="Name" />\n  <input type="email" name="Email Address" placeholder="Email Address" />\n  <input type="tel" name="Mobile Number" placeholder="Mobile Number" />`;

export default function Home() {
    const [html, setHtml] = useState(defaultHTML);

    const [validations, setValidations] = useState({ max: '', min: '', maxLength: '', pattern: '' });
    const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);
    const [list, setList] = useState<{ id: number; type: string; name: string }[]>([
        { id: 1, type: 'text', name: 'Name' },
        { id: 2, type: 'email', name: 'Email Address' },
        { id: 3, type: 'tel', name: 'Mobile Number' }
    ]);
    const [name, setName] = useState('');

    const handleSelect = ({ label, value }: { label: string; value: string }) => setSelectedOption({ label, value });

    // TODO: select추가 및 options 입력 input 추가하기
    // TODO: radio추가 및 options 입력 input 추가하기
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setList((prev) => [...prev, { id: list.length + 1, type: selectedOption.value, name }]);
        setHtml(
            (prev) =>
                `${prev}\n  <input type="${selectedOption.value}" name="${name}" placeholder="${name}" min="${validations.min}" max="${validations.max}" maxLength="${validations.maxLength}" pattern="${validations.pattern}" />`
        );
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
