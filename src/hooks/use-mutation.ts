import { useState } from "react"
import showSuccessMessage from "../utils/success-message"

type Fetch = 'POST' | 'DELETE' | 'PUT'

type Options = {
    method: Fetch,
    headers: {
        'Content-Type': string
    },
    body?: string
}

const useMutation = (fetchApi: string, method: Fetch) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const mutate = async (data?: { mission: string }) => {
        setError(null)
        setIsLoading(true)

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

            showSuccessMessage(method)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            if (error instanceof Error)
                setError(error)
        }
    }

    return { isLoading, error, mutate }
}

export default useMutation