import SortableIcon from 'components/SortableIcon';

type ListItemType = {
    item: { name: string };
};

export default function ListItem({ item }: ListItemType) {
    return (
        <div className="flex items-center cursor-grab text-[16px] h-14 font-medium bg-[#FFE2E2] text-[#8785A2] border border-[#FFC7C7] [line-height:40px] rounded-md mb-5 px-2.5">
            <SortableIcon />
            {item.name}
        </div>
    );
}
