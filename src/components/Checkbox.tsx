type CheckboxType = {
    id: string;
    name: string;
    label: string;
    onChange: () => void;
};

export default function Checkbox({ id, name, label, onChange }: CheckboxType) {
    return (
        <label htmlFor={id} className="text-[#8785A2] text-[14px] mb-5 block">
            <input id={id} type="checkbox" name={name} className="mr-2.5" onChange={onChange} />
            {label}
        </label>
    );
}
