type OptionType = { label: string; value: string };

export type SelectPropsType = {
    selectedOption: OptionType;
    onSelect: (option: OptionType) => void;
};
