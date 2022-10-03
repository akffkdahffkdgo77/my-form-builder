interface IProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function Input({ name, setName }: IProps) {
    return (
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
    );
}
