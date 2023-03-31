import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useBoundStore } from 'lib/zustand/store';

export default function CodeHighlighter() {
    const html = useBoundStore((state) => state.html);

    return (
        <SyntaxHighlighter showLineNumbers startingLineNumber={1} customStyle={{ maxWidth: 450, fontSize: 16 }} language="javascript" style={nightOwl}>
            {`${html !== '' ? `${html}` : ''}\n  <input type="submit" value="제출하기" />\n</form>`}
        </SyntaxHighlighter>
    );
}
