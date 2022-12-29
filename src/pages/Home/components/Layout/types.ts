import { ListType } from 'pages/Home/types';

export interface ILayout {
    list: ListType[];
    onClick: (newState: ListType[]) => void;
}
