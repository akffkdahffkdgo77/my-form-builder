import { useCallback, useState } from 'react';

import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { useBoundStore } from 'lib/zustand/store';

export default function Validation() {
    const { validations, setValidations } = useBoundStore();
    const [isValidationVisible, setIsValidationVisible] = useState(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValidations({ ...validations, [e.currentTarget.name]: e.currentTarget.value }), [validations, setValidations]);

    return (
        <>
            <Checkbox id="validation" name="validation" label="Show Validation" onChange={() => setIsValidationVisible((prev) => !prev)} />
            {isValidationVisible && (
                <div className="border border-[#8785A2] p-5 rounded-md mb-5">
                    <Input label="MAX" name="max" placeholder="" value={validations.max} onChange={handleChange} />
                    <Input label="MIN" name="min" placeholder="" value={validations.min} onChange={handleChange} />
                    <Input label="MAXLENGTH" name="maxLength" placeholder="" value={validations.maxLength} onChange={handleChange} />
                    <Input label="PATTERN" name="pattern" placeholder="" value={validations.pattern} onChange={handleChange} />
                </div>
            )}
        </>
    );
}
