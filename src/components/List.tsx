import { useEffect } from 'react';
import { rootApi } from '../App';
import ListItem from './ListItem';
import { useUpdateStatusContext } from '../contexts/custom-contexts';
import useQuery from '../hooks/use-query';
import Loading from './Loading';

const List = () => {
    const { isListChange, setIsListChange } = useUpdateStatusContext();
    const {data: list, isLoading, error, refetch} = useQuery(rootApi + 'todo.json')

    useEffect(() => {
        (async () => {
            if (isListChange) {
                await refetch()
                setIsListChange(false)
            }
        })()
    }, [isListChange, setIsListChange,refetch]);

    return (
        <div className='flex flex-col gap-2'>
            {isLoading && <div className='flex justify-center items-center'><Loading /></div>}

            {error && <div>{error.message}</div>}

            {!isLoading && !list.length && !error && <div>You have no todo.</div>}

            {list.map(mis => (<ListItem mis={mis} key={mis.id} />))}
        </div>
    );
};

export default List;
