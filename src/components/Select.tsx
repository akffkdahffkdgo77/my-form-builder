import { useEffect, useRef, useState } from 'react';

type OptionType = { label: string; value: string };

type SelectType = {
    id: string;
    name: string;
    options: OptionType[];
    selectedOption: OptionType;
    onSelect: (option: OptionType) => void;
};

export default function Select({ id, name, options, selectedOption, onSelect }: SelectType) {
    const [show, setShow] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClick = (option: { label: string; value: string }) => onSelect(option);

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
        <label htmlFor={id} className="relative block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
            {name}
            <div
                ref={selectRef}
                tabIndex={0}
                role="button"
                onClick={() => setShow((prev) => !prev)}
                onKeyDown={() => setShow((prev) => !prev)}
                className="bg-white h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2] focus:outline-dashed focus:outline-[#8785A2]"
            >
                {selectedOption.label}
            </div>
            <ul className={`${show ? 'block' : 'hidden'} absolute top-[62px] left-[-1px] right-[-1px] bg-white rounded-md overflow-hidden`}>
                {options.map(({ label, value }) => (
                    <li
                        key={value}
                        className={`${selectedOption.value === value ? 'bg-[#FFE2E2]' : 'bg-white'} h-10 border-b border-[#F6F6F6] [line-height:40px] px-2.5 text-[#8785A2] hover:bg-[#FFE2E2]`}
                    >
                        <button className="w-full" type="button" onClick={() => handleClick({ label, value })}>
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
        </label>
    );
}