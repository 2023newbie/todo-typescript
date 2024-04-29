import { createContext, ReactElement, useState } from "react";

type UpdateStatusType = {
    isListChange: boolean,
    setIsListChange: (status: boolean) => void
}

export const UpdateStatusContext = createContext<UpdateStatusType | null>(null)

const UpdateStatusProvider = ({children}: {children: ReactElement}) => {
    const [isListChange, setIsListChange] = useState<boolean>(true)

    return (
        <UpdateStatusContext.Provider value={{isListChange, setIsListChange}}>
            {children}
        </UpdateStatusContext.Provider>
    )
}

export default UpdateStatusProvider