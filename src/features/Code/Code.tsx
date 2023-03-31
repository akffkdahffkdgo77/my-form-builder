import Heading from 'components/Heading';
import CodeHighlighter from 'features/Code/CodeHighlighter';
import CopyButton from 'features/Code/CopyButton';

export default function Code() {
    return (
        <section className="relative border border-[#8785A2] max-w-[500px] rounded-md p-5 text-[14px]">
            <Heading text="Code" />
            <CopyButton />
            <CodeHighlighter />
        </section>
    );
}
