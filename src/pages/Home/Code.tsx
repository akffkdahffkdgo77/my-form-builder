import { useEffect, useRef, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Typography } from '@components';

import { useBoundStore } from '@zustand/store';

export default function Code() {
    const html = useBoundStore((state) => state.html);
    const timerId = useRef<NodeJS.Timeout>();
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = () => {
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
        <section className="relative max-w-[500px] rounded-md border border-[#8785A2] p-5 text-[14px]">
            <Typography component="h3" className="mb-5 w-full text-center text-[20px] font-bold text-[#8785A2]">
                Code
            </Typography>
            <button
                type="button"
                onClick={handleClick}
                className={`${isCopied ? 'bg-[#8785A2] text-[#FFC7C7]' : 'bg-[#FFC7C7] text-[#8785A2]'} absolute top-[70px] right-5 py-[5px] px-2.5 text-[12px] uppercase`}
            >
                Copy
            </button>
            <SyntaxHighlighter showLineNumbers startingLineNumber={1} customStyle={{ maxWidth: 450, fontSize: 16 }} language="javascript" style={nightOwl}>
                {`${html !== '' ? `${html}` : ''}\n  <input type="submit" value="제출하기" />\n</form>`}
            </SyntaxHighlighter>
        </section>
    );
}
