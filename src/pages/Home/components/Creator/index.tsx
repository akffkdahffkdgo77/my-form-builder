import { useState } from 'react';

import { Input, Select, Validation } from 'components';

import type { CreatorPropsType } from 'pages/Home/components/Creator/types';

export default function Creator(props: CreatorPropsType) {
    const { name, setName, options, setOptions, validations, setValidations, selectedOption, onSelect, onSubmit } = props;

    const [isValidationVisible, setIsValidationVisible] = useState(false);

    return (
        <section className="border border-[#8785A2] min-w-[400px] max-w-[500px] w-full rounded-md p-5">
            <h3 className="w-full text-center text-[#8785A2] text-[20px] font-bold mb-5">Creator</h3>
            <form onSubmit={onSubmit}>
                <Input name="name" placeholder="Please enter the name of input" value={name} setValue={setName} />
                <Select selectedOption={selectedOption} onSelect={onSelect} />
                {(selectedOption.value === 'select' || selectedOption.value === 'radio') && (
                    <>
                        <Input name="options" placeholder="Enter options separated by ," value={options} setValue={setOptions} />
                        <small className="block mt-[-15px] mb-5 text-[10px] text-[#8785A2] font-bold">옵션 값은 , 로 구분해주세요.</small>
                    </>
                )}
                <label htmlFor="validation" className="text-[#8785A2] text-[14px] mb-5 block">
                    <input id="validation" type="checkbox" name="validation" className="mr-2.5" onChange={() => setIsValidationVisible((prev) => !prev)} />
                    Show Validation
                </label>
                <Validation isValidationVisible={isValidationVisible} validations={validations} setValidations={setValidations} />
                <input type="submit" value="Create" className="rounded-md bg-[#FFC7C7] w-full h-[50px] mb-2.5 uppercase font-semibold text-[#8785A2] hover:scale-95 cursor-pointer" />
            </form>
        </section>
    );
}
