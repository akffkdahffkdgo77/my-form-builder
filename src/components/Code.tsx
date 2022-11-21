import { useEffect, useRef, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
    html: string;
}

export default function CodeSyntaxHighlighter({ html }: IProps) {
    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);

    const onClick = () => {
        if (navigator.clipboard) {
            const textarea = document.createElement('textarea');
            textarea.innerHTML = `${html}\n  <input type="submit" value="제출하기" />\n</form>`;
            document.body.appendChild(textarea);
            textarea.select();
            navigator.clipboard.writeText(textarea.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')).then(() => {
                document.body.removeChild(textarea);
                setIsCopied(true);
                timerId.current = setTimeout(() => setIsCopied(false), 300);
            });
        } else {
            throw new Error('Clipboard API is not supported');
        }
    };

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    return (
        <section className="relative border border-[#8785A2] max-w-[500px] rounded-md p-5 text-[14px]">
            <h3 className="w-full text-center text-[#8785A2] text-[20px] font-bold mb-5">Code</h3>
            <button
                className={`${isCopied ? 'bg-[#8785A2] text-[#FFC7C7]' : 'bg-[#FFC7C7] text-[#8785A2]'} absolute top-[70px] right-5 text-[12px] uppercase py-[5px] px-2.5`}
                type="button"
                onClick={onClick}
            >
                Copy
            </button>
            <SyntaxHighlighter showLineNumbers startingLineNumber={1} customStyle={{ maxWidth: 450, fontSize: 16 }} language="javascript" style={nightOwl}>
                {`${html !== '' ? `${html}` : ''}\n  <input type="submit" value="제출하기" />\n</form>`}
            </SyntaxHighlighter>
        </section>
    );
}
