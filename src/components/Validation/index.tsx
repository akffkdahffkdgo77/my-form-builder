import type { ValidationPropsType } from 'components/Validation/types';

export default function Validation({ isValidationVisible, validations, setValidations }: ValidationPropsType) {
    return isValidationVisible ? (
        <div className="border border-[#8785A2] p-5 rounded-md mb-5">
            <label htmlFor="max" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                MAX
                <input
                    id="max"
                    type="text"
                    name="max"
                    value={validations.max}
                    onChange={(e) => setValidations((prev) => ({ ...prev, max: e.target.value }))}
                    className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
                />
            </label>
            <label htmlFor="min" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                MIN
                <input
                    id="min"
                    type="text"
                    name="min"
                    value={validations.min}
                    onChange={(e) => setValidations((prev) => ({ ...prev, min: e.target.value }))}
                    className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
                />
            </label>
            <label htmlFor="maxLength" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                MAXLENGTH
                <input
                    id="maxLength"
                    type="text"
                    name="maxLength"
                    value={validations.maxLength}
                    onChange={(e) => setValidations((prev) => ({ ...prev, maxLength: e.target.value }))}
                    className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
                />
            </label>
            <label htmlFor="pattern" className="block uppercase text-[#FFC7C7] text-[14px] font-bold tracking-wider mb-5">
                Pattern
                <input
                    id="pattern"
                    type="text"
                    name="pattern"
                    value={validations.pattern}
                    onChange={(e) => setValidations((prev) => ({ ...prev, pattern: e.target.value }))}
                    className="h-10 w-full border border-[#8785A2] rounded-md font-medium p-2.5 text-[12px] text-[#8785A2]"
                />
            </label>
        </div>
    ) : null;
}
