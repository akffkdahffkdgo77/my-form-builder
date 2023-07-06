type CheckboxType = React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    name: string;
    label: string;
    onChange: () => void;
};

export default function CustomizedCheckbox({ id, name, label, onChange, ...props }: CheckboxType) {
    return (
        <label htmlFor={id} className="mb-5 block text-[14px] text-[#8785A2]">
            <input {...props} id={id} type="checkbox" name={name} className="mr-2.5" onChange={onChange} />
            {label}
        </label>
    );
}
