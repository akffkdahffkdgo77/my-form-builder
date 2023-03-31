import { useEffect, useRef, useState } from 'react';

import { useBoundStore } from 'lib/zustand/store';

export default function CopyButton() {
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
        <button
            type="button"
            onClick={handleClick}
            className={`${isCopied ? 'bg-[#8785A2] text-[#FFC7C7]' : 'bg-[#FFC7C7] text-[#8785A2]'} absolute top-[70px] right-5 text-[12px] uppercase py-[5px] px-2.5`}
        >
            Copy
        </button>
    );
}
