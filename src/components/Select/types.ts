export interface ISelect {
    selectedOption: { label: string; value: string };
    handleSelect: (option: { label: string; value: string }) => void;
}
