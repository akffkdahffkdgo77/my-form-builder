export type ValidationPropsType = {
    isValidationVisible: boolean;
    validations: { max: string; min: string; maxLength: string; pattern: string };
    setValidations: React.Dispatch<React.SetStateAction<{ max: string; min: string; maxLength: string; pattern: string }>>;
};
