import { FormEvent, SetStateAction, useEffect, useRef, useState } from 'react';

import { options } from 'pages/Home';

interface IProps {
    name: string;
    setName: React.Dispatch<SetStateAction<string>>;
    validations: { max: string; min: string; maxLength: string; pattern: string };
    setValidations: React.Dispatch<SetStateAction<{ max: string; min: string; maxLength: string; pattern: string }>>;
    selectedOption: { label: string; value: string };
    handleSelect: (option: { label: string; value: string }) => void;
    handleSubmit: (e: FormEvent) => void;
}

export default function Form({ name, setName, validations, setValidations, selectedOption, handleSelect, handleSubmit }: IProps) {
    const [showValidation, setShowValidation] = useState(false);
    const [show, setShow] = useState(false);

    const selectRef = useRef<HTMLDivElement>(null);

    const onClick = (option: { label: string; value: string }) => handleSelect(option);

    useEffect(() => {
        const handleClickOutsideSelect = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        };

        window.addEventListener('click', handleClickOutsideSelect, true);
        return () => window.removeEventListener('click', handleClickOutsideSelect, true);
    }, []);

    return (
        <section className="border border-[#8785A2] min-w-[400px] max-w-[500px] w-full rounded-md p-5">
            <h3 className="w-full text-center text-[#8785A2] text-[20px] font-bold mb-5">Creator</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                    name
                    <input
                        id="name"
                        type="text"
                        name="inputName"
                        value={name}
                        onChange={(e) => setName(e.target.name)}
                        placeholder="Please enter the name of input"
                        className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#F6F6F6]"
                    />
                </label>
                <label htmlFor="type" className="relative block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                    type
                    <div
                        ref={selectRef}
                        tabIndex={0}
                        role="button"
                        onClick={() => setShow((prev) => !prev)}
                        onKeyDown={() => setShow((prev) => !prev)}
                        className="bg-white h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
                    >
                        {selectedOption.label}
                    </div>
                    <ul className={`${show ? 'block' : 'hidden'} absolute top-[62px] left-[-1px] right-[-1px] bg-white rounded-md overflow-hidden`}>
                        {options.map(({ label, value }) => (
                            <li key={value} className="h-10 border-b border-[#F6F6F6] [line-height:40px] px-2.5 text-[#8785A2] hover:bg-[#FFE2E2]">
                                <button className="w-full" type="button" onClick={() => onClick({ label, value })}>
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </label>
                <label htmlFor="validation" className="text-[#8785A2] text-[14px] mb-5 block">
                    <input id="validation" type="checkbox" name="validation" className="mr-2.5" onChange={() => setShowValidation((prev) => !prev)} />
                    Show Validation
                </label>
                {showValidation && (
                    <div className="border border-[#8785A2] p-5 rounded-md">
                        <label htmlFor="max" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                            MAX
                            <input id="max" type="text" name="max" className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#F6F6F6]" />
                        </label>
                        <label htmlFor="min" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                            MIN
                            <input id="min" type="text" name="min" className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#F6F6F6]" />
                        </label>
                        <label htmlFor="maxLength" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                            MAXLENGTH
                            <input id="maxLength" type="text" name="maxLength" className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#F6F6F6]" />
                        </label>
                        <label htmlFor="pattern" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                            Pattern
                            <input id="pattern" type="text" name="pattern" className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#F6F6F6]" />
                        </label>
                    </div>
                )}
                <input type="submit" value="Create" className="rounded-md bg-[#FFC7C7] w-full h-[50px] mb-2.5 uppercase font-semibold text-[#8785A2] hover:scale-95 cursor-pointer" />
            </form>
        </section>
    );
}
