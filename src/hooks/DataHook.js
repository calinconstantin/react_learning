import { useState, useEffect } from "react";

export const useDataHook = () => {
    const [data, setData] = useState();

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        response.json()
            .then(response => setData(response))
            .catch(err => console.error(err))
    }


    useEffect(() => {
        fetchData();
    }, [])

    return { data, setData };

}