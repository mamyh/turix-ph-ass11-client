
import { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('./../service.json')
            .then(res => res.json())
            .then(data => setServices(data)).finally(() => setIsLoading(false));
    }, []);

    return { services, isLoading };
}

export default useService;
