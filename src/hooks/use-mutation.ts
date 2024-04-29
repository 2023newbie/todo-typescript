import { useState } from "react"

type Fetch = 'POST' | 'DELETE' | 'PUT'

type Options = {
    method: Fetch,
    headers: {
        'Content-Type': string
    },
    body?: string
}

const useMutation = (fetchApi: string, method: Fetch) => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const mutate = async (data: { mission: string } | undefined) => {
        setError(null)
        setIsLoading(true)
        setIsSuccess(false)

        const options: Options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        }

        try {
            if (data) options.body = JSON.stringify(data)
            const response = await fetch(fetchApi, options)

            if (!response.ok) {
                setIsLoading(false)
                throw Error('Server does not response.')
            }

            setIsSuccess(true)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            if (error instanceof Error)
                setError(error)
        }
    }

    return { isSuccess, isLoading, error, mutate, setIsSuccess }
}

export default useMutation