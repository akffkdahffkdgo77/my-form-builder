import { create } from 'zustand';

import { createFormSlice, FormSlice } from 'lib/zustand/formSlice';

export const useBoundStore = create<FormSlice>()((...a) => ({
    ...createFormSlice(...a)
}));
