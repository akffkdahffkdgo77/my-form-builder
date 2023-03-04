import { ListType } from 'pages/Home/types';

export type LayoutPropsType = {
    list: ListType[];
    onClick: (newState: ListType[]) => void;
};
