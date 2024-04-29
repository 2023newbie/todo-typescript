import { useContext } from 'react'
import { UpdateStatusContext } from './update-status'

export const useUpdateStatusContext = () => {
    const ctx = useContext(UpdateStatusContext)

    if (!ctx) {
        throw Error('Context does not exist.')
    }

    return ctx
}