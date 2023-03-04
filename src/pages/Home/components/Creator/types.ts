export type CreatorPropsType = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    options: string;
    setOptions: React.Dispatch<React.SetStateAction<string>>;
    validations: { max: string; min: string; maxLength: string; pattern: string };
    setValidations: React.Dispatch<React.SetStateAction<{ max: string; min: string; maxLength: string; pattern: string }>>;
    selectedOption: { label: string; value: string };
    onSelect: (option: { label: string; value: string }) => void;
    onSubmit: (e: React.FormEvent) => void;
};
