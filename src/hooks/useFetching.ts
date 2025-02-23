import {useState} from "react";

export default function useFetching(callback: () => Promise<void>)
    : [() => Promise<void>, boolean, Error]
{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    async function fetching () {
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}