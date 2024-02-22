import axios, { Method } from "axios";
import { useEffect, useState } from "react";

export default function useFetch(method: Method, endpoint: string, body: any = {}) {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const options = {
        method,
        url: `https://bpump-api.onrender.com/${endpoint}`,
        data: body,
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
        } catch (error) {
            console.error("Erreur lors de la requête API :", error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refetch = () => fetchData();

    return { data, isLoading, error, refetch };
}
