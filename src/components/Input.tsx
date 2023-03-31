type InputType = {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, placeholder, name, value, onChange }: InputType) {
    return (
        <label htmlFor={name} className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
            {label}
            <input
                id={name}
                type="text"
                name={name}
                value={value}
                required
                placeholder={placeholder}
                onChange={onChange}
                className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
            />
        </label>
    );
}
