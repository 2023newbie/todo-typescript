import { TrashIcon } from '@heroicons/react/24/solid';
import { rootApi } from '../App';
import { useUpdateStatusContext } from '../contexts/custom-contexts';

const ListItem = ({ mis }: { mis: { mission: string; id: string } }) => {
    const { setIsListChange } = useUpdateStatusContext()
    const deleteMission = () => {
        fetch(`${rootApi}todo/${mis.id}.json`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsListChange(true)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='bg-slate-300 p-2 rounded-md text-slate-950 relative'>
            {mis.mission}
            <TrashIcon className='fill-blue-800 size-6 cursor-pointer transition hover:fill-blue-600 absolute right-2 top-0 translate-y-1/3' onClick={deleteMission} />
        </div>
    );
};

export default ListItem;
