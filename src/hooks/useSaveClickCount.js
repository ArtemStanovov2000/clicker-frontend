import { useState } from "react"

export const useSaveClickCount = (adress) => {
    const [clickCount, setClickCount] = useState(0);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const saveClickCount = (count) => {
        setLoading(true);
        fetch(`${adress}`)
        .then((response) => {
            setClickCount(response);
            setError(undefined)
        })
        .catch((reason) => {
            setError(reason);
            setClickCount(0);
        })
        .finally(() => {
            setLoading(false)
        });
    };

    return [saveClickCount, clickCount, error, loading]
}