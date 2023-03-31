import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

export default function SortableIcon() {
    return (
        <div className="flex items-center mr-2.5">
            <EllipsisVerticalIcon className="w-6 h-6" />
            <EllipsisVerticalIcon className="ml-[-18px] w-6 h-6" />
        </div>
    );
}
