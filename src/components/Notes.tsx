type NotesType = {
    text: string;
};

export default function Notes({ text }: NotesType) {
    return <small className="block mt-[-15px] mb-5 text-[10px] text-[#8785A2] font-bold">{text}</small>;
}
