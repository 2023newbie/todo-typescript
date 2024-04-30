import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { rootApi } from '../App';
import { useUpdateStatusContext } from '../contexts/custom-contexts';
import useMutation from '../hooks/use-mutation';

const ListItem = ({ mis }: { mis: { mission: string; id: string } }) => {
    const { setIsListChange } = useUpdateStatusContext();
    const { isLoading, error, mutate } = useMutation(
        `${rootApi}todo/${mis.id}.json`,
        'DELETE'
    );
    const deleteMission = () => {
        mutate().then(() => setIsListChange(true));
    };

    return (
        <div className='bg-slate-300 p-2 rounded-md text-slate-950 relative group'>
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
