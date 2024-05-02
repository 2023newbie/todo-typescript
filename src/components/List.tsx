import { DragEventHandler, useEffect } from 'react';
import { rootApi } from '../App';
import ListItem from './ListItem';
import { useUpdateStatusContext } from '../contexts/custom-contexts';
import useQuery from '../hooks/use-query';
import Loading from './Loading';

const List = () => {
    const { isListChange, setIsListChange } = useUpdateStatusContext();
    const {data: list, isLoading, error, refetch} = useQuery(rootApi + 'todo.json')

    useEffect(() => {
        refetch().then(() => setIsListChange(false))
    }, [isListChange, setIsListChange,refetch]);

    const dragOverListener: DragEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        const sortableList = document.getElementById('buy-list')!
        const draggingItem = sortableList.querySelector('.dragging')
        const siblings = [...sortableList.querySelectorAll<HTMLElement>('.mission-item:not(.dragging)')];

        const nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        }) || null;

        sortableList.insertBefore(draggingItem, nextSibling);
    }

    return (
        <div id='buy-list' className='flex flex-col gap-2 max-h-[70vh] overflow-y-auto bg-slate-400 p-4 rounded-lg' onDragOver={dragOverListener} onDragEnter={e => e.preventDefault()}>
            {isLoading && <div className='flex justify-center items-center'><Loading /></div>}

            {error && <div>{error.message}</div>}

            {!isLoading && !list.length && !error && <div>You have no to buy items.</div>}

            {list.map(mis => (<ListItem mis={mis} key={mis.id} />))}
        </div>
    );
};

export default List;
