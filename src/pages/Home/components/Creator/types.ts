export interface ICreator {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    options: string;
    setOptions: React.Dispatch<React.SetStateAction<string>>;
    validations: { max: string; min: string; maxLength: string; pattern: string };
    setValidations: React.Dispatch<React.SetStateAction<{ max: string; min: string; maxLength: string; pattern: string }>>;
    selectedOption: { label: string; value: string };
    handleSelect: (option: { label: string; value: string }) => void;
    handleSubmit: (e: React.FormEvent) => void;
}
