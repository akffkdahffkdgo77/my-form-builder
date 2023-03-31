type HeadingType = {
    text: string;
};

export default function Heading({ text }: HeadingType) {
    return <h3 className="w-full text-center text-[#8785A2] text-[20px] font-bold mb-5">{text}</h3>;
}
