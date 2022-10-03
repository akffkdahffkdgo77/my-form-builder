import { SetStateAction } from 'react';

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { ReactSortable } from 'react-sortablejs';

interface IProps {
    list: {
        id: number;
        type: string;
        name: string;
    }[];
    setList: React.Dispatch<SetStateAction<{ id: number; type: string; name: string }[]>>;
}

export default function Sortable({ list, setList }: IProps) {
    return (
        <section className="border border-[#8785A2] w-full min-w-[300px] max-w-[500px] min-h-[300px] lg:h-full lg:min-h-full rounded-md p-5">
            <h3 className="w-full text-center text-[#8785A2] text-[20px] font-bold mb-5">Layout</h3>
            <ReactSortable list={list} setList={setList}>
                {list.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center cursor-grab text-[16px] h-14 font-medium bg-[#FFE2E2] text-[#8785A2] border border-[#FFC7C7] [line-height:40px] rounded-md mb-5 px-2.5"
                    >
                        <div className="flex items-center mr-2.5">
                            <EllipsisVerticalIcon className="w-6 h-6" />
                            <EllipsisVerticalIcon className="ml-[-18px] w-6 h-6" />
                        </div>
                        {item.name}
                    </div>
                ))}
            </ReactSortable>
        </section>
    );
}
