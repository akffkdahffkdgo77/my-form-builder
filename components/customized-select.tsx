'use client';

import { useEffect, useRef, useState } from 'react';

type OptionType = { label: string; value: string };

type SelectType = {
    id: string;
    name: string;
    options: OptionType[];
    selectedOption: OptionType;
    onSelect: (option: OptionType) => void;
};

export default function CustomizedSelect({ id, name, options, selectedOption, onSelect }: SelectType) {
    const [show, setShow] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleClickAway = (event: MouseEvent) => {
            if (show && selectRef.current && !selectRef.current.contains(event.target as Node) && listRef.current && !listRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        };

        window.addEventListener('click', handleClickAway, true);
        return () => window.removeEventListener('click', handleClickAway, true);
    }, [show]);

    const handleClick = ({ label, value }: { label: string; value: string }) => {
        onSelect({ label, value });
        setShow(false);
    };

    return (
        <label htmlFor={id} className="relative mb-5 block text-[14px] font-bold uppercase tracking-wider text-[#FFC7C7]">
            {name}
            <div
                ref={selectRef}
                tabIndex={0}
                role="button"
                onClick={() => setShow((prev) => !prev)}
                onKeyDown={() => setShow((prev) => !prev)}
                className="h-10 w-full rounded-md border border-[#8785A2] bg-white p-2.5 text-[12px] font-medium text-[#8785A2] focus:outline-dashed focus:outline-[#8785A2]"
            >
                {selectedOption.label}
            </div>
            {show && (
                <ul ref={listRef} className="absolute left-[-1px] right-[-1px] top-[62px] max-h-[240px] overflow-hidden overflow-y-auto rounded-md bg-white">
                    {options.map(({ label, value }) => (
                        <li
                            key={value}
                            className={`${selectedOption.value === value ? 'bg-[#FFE2E2]' : 'bg-white'} h-10 border-b border-[#F6F6F6] px-2.5 text-[#8785A2] [line-height:40px] hover:bg-[#FFE2E2]`}
                        >
                            <button className="w-full" type="button" onClick={() => handleClick({ label, value })}>
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </label>
    );
}
