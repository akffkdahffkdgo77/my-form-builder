import type { InputPropsType } from 'components/Input/types';

export default function Input({ placeholder, name, value, setValue }: InputPropsType) {
    return (
        <label htmlFor={name} className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
            name
            <input
                id={name}
                type="text"
                name={name}
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
            />
        </label>
    );
}
