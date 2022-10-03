import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
    html: string;
}
export default function CodeSyntaxHighlighter({ html }: IProps) {
    return (
        <section className="border border-[#8785A2] max-w-[500px] rounded-md p-5 text-[14px]">
            <h3 className="w-full text-center text-[#8785A2] text-[20px] font-bold mb-5">Code</h3>
            <SyntaxHighlighter customStyle={{ maxWidth: 450 }} language="javascript" style={nightOwl}>
                {`<form onSubmit={onSubmit}>\n ${html !== '' ? `${html}\n` : ''}  <input type="submit" value="제출하기" />\n</form>`}
            </SyntaxHighlighter>
        </section>
    );
}
