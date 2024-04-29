import { FC, ReactElement, useEffect, useState } from 'react';
import { rootApi } from '../App';
import { useUpdateStatusContext } from '../contexts/custom-contexts';
import Loading from './Loading';
import useMutation from '../hooks/use-mutation';
import showSuccessMessage from '../utils/success-message';

const Form: FC = (): ReactElement => {
    const { setIsListChange } = useUpdateStatusContext();
    const [mission, setMission] = useState('');
    const { isSuccess, isLoading, error, mutate, setIsSuccess } = useMutation(
        rootApi + 'todo.json',
        'POST'
    );

    const submitMission = async () => {
        if (mission.trim() === '') {
            return alert('Invalid value input.');
        }
        await mutate({ mission });
        if (!error) setMission('');
    };

    useEffect(() => {
        if (isSuccess) {
            showSuccessMessage();
            setIsSuccess(false);
            setIsListChange(true);
        }
    }, [isSuccess, setIsSuccess, setIsListChange]);

    return (
        <>
            {error && <div className='-mb-6 text-red-400'>{error.message}</div>}

            <div className='flex gap-2 md:gap-4 h-min w-full justify-center flex-col sm:flex-row'>
                <input
                    id='mission-input'
                    type='text'
                    placeholder='Type here'
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
                    {!isLoading ? 'Submit' : <Loading />}
                </button>
            </div>
        </>
    );
};

export default Form;
