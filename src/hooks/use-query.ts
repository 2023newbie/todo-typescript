import { useCallback, useEffect, useState } from "react"

type DataType = { mission: string; id: string }

const formatData = (data: DataType[] | null) => {
    if (data === null) return []
    const entries = Object.entries(data);
    return entries.map(val => ({ ...val[1], id: val[0] }));
}

const useQuery = (fetchApi: string) => {
    const [data, setData] = useState<DataType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchFn = useCallback(async () => {
        setError(null)
        setIsLoading(true)

        try {
            const response = await fetch(fetchApi)

            if (!response.ok) {
                setIsLoading(false)
                throw Error('Server does not response.')
            }

            const resData: DataType[] | null = await response.json()
            const formattedData = formatData(resData)

            setData(formattedData)
            setIsLoading(false)

        } catch (error) {
            if (error instanceof Error)
                setError(error)
        }
    }, [fetchApi])

    useEffect(() => { fetchFn() }, [fetchFn])

    return { data, isLoading, error, refetch: fetchFn }
}

export default useQuery