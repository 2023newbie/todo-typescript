import { FC, ReactElement, useState } from 'react';
import { rootApi } from '@/utils/get-url';
import { useUpdateStatusContext } from '../contexts/custom-contexts';
import Loading from './Loading';
import useMutation from '../hooks/use-mutation';
import { PlusIcon } from '@heroicons/react/24/solid';

const Form: FC = (): ReactElement => {
    const { setIsListChange } = useUpdateStatusContext();
    const [mission, setMission] = useState('');
    const { isLoading, error, mutate } = useMutation(
        rootApi + 'todo.json',
        'POST'
    );

    const submitMission = async () => {
        if (mission.trim() === '') {
            return alert('Invalid value input.');
        }
        await mutate({ mission });
        if (!error) setMission('');
        setIsListChange(true)
    };

    return (
        <>
            {error && <div className='-mb-6 text-red-400'>{error.message}</div>}

            <div className='flex gap-2 md:gap-4 h-min w-full justify-center flex-col sm:flex-row'>
                <input
                    autoComplete='off'
                    id='mission-input'
                    type='text'
                    placeholder='Type mission here'
                    className='input input-bordered w-full'
                    value={mission}
                    onChange={e => setMission(e.target.value)}
                    disabled={isLoading}
                />
                <button
                    id='submit-btn'
                    onClick={submitMission}
                    type='button'
                    className='btn btn-primary text-slate-200'
                    disabled={isLoading}
                >
                    {!isLoading ? <PlusIcon className='size-6' /> : <Loading />}
                </button>
            </div>
        </>
    );
};

export default Form;
