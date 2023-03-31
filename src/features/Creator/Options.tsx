import { useCallback } from 'react';

import Input from 'components/Input';
import Notes from 'components/Notes';
import { useBoundStore } from 'lib/zustand/store';

export default function Options() {
    const { options, setOptions } = useBoundStore((state) => ({ options: state.options, setOptions: state.setOptions }));

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setOptions(e.currentTarget.value), [setOptions]);

    return (
        <>
            <Input label="OPTIONS" name="options" placeholder="Enter options separated by ," value={options} onChange={handleChange} />
            <Notes text="옵션 값은 , 로 구분해주세요." />
        </>
    );
}
