import { TrashIcon, PencilIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/solid';
import { rootApi } from '@/utils/get-url';
import { useUpdateStatusContext } from '../contexts/custom-contexts';
import useMutation from '../hooks/use-mutation';
import { DragEventHandler } from 'react';

const ListItem = ({ mis }: { mis: { mission: string; id: string } }) => {
    const { setIsListChange } = useUpdateStatusContext();
    const { isLoading, error, mutate } = useMutation(
        `${rootApi}todo/${mis.id}.json`,
        'DELETE'
    );
    const deleteMission = () => {
        mutate().then(() => setIsListChange(true));
    };

    const dragStartListener: DragEventHandler<HTMLDivElement> = (e) => {
        const target = e.target as HTMLElement
        setTimeout(() => target.classList.add('dragging'), 0);
    }

    const dragEndListener: DragEventHandler<HTMLDivElement> = (e) => {
        const target = e.target as HTMLElement
        target.classList.remove('dragging');
    }

    return (
        <div className='mission-item bg-slate-300 p-2 rounded-md text-slate-950 relative group flex items-center' draggable onDragStart={dragStartListener} onDragEnd={dragEndListener}>
            <div className='inline-block drag-btn mr-4'><AdjustmentsVerticalIcon className='size-[20px] fill-blue-800 cursor-all-scroll' /></div>

            {mis.mission}

            {error && <span className='text-red-500'> - {error.message}</span>}

            <PencilIcon className='adjust-icon right-10' />

            {isLoading ? (
                <span className='loading loading-bars loading-sm text-blue-800 absolute right-[10px] top-0 translate-y-1/2'></span>
            ) : (
                <TrashIcon
                    className='adjust-icon right-2'
                    onClick={deleteMission}
                />
            )}
        </div>
    );
};

export default ListItem;
