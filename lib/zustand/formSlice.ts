import { StateCreator } from 'zustand';

export type ListType = {
    id: number;
    type: string;
    name: string;
    max: string;
    min: string;
    maxLength: string;
    pattern: string;
    options?: string;
};

type ValidationType = {
    max: string;
    min: string;
    maxLength: string;
    pattern: string;
};

export interface FormSlice {
    html: string;
    setHTML: (newHTML: string) => void;
    list: ListType[];
    setList: (newList: ListType[]) => void;
    validations: ValidationType;
    setValidations: (validation: ValidationType) => void;
    options: string;
    setOptions: (newOptions: string) => void;
}

const DEFAULT_LIST = [
    { id: 1, type: 'text', name: 'Name', max: '', min: '', maxLength: '', pattern: '', options: '' },
    { id: 2, type: 'email', name: 'Email Address', max: '', min: '', maxLength: '', pattern: '', options: '' },
    { id: 3, type: 'tel', name: 'Mobile Number', max: '', min: '', maxLength: '', pattern: '', options: '' }
];

const DEFAULT_VALIDATION = { max: '', min: '', maxLength: '', pattern: '' };

export const createFormSlice: StateCreator<FormSlice> = (set) => ({
    html: '',
    list: DEFAULT_LIST,
    validations: DEFAULT_VALIDATION,
    options: '',
    setHTML: (newHTML) => set(() => ({ html: newHTML })),
    setList: (newList) => set(() => ({ list: newList })),
    setValidations: (newValidation) => set(() => ({ validations: newValidation })),
    setOptions: (newOptions) => set(() => ({ options: newOptions }))
});
