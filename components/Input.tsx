type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ label, placeholder, name, value, onChange, ...props }: InputType) {
    return (
        <label htmlFor={name} className="mb-5 block text-[14px] font-bold uppercase tracking-wider text-[#FFC7C7]">
            {label}
            <input
                {...props}
                id={name}
                type="text"
                name={name}
                value={value}
                required
                placeholder={placeholder}
                onChange={onChange}
                className="h-10 w-full rounded-md border border-[#8785A2] p-2.5 text-[12px] font-medium text-[#8785A2]"
            />
        </label>
    );
}
