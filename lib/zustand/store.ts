import { create } from 'zustand';

import { createFormSlice, FormSlice } from './formSlice';

export const useBoundStore = create<FormSlice>()((...a) => ({
    ...createFormSlice(...a)
}));
