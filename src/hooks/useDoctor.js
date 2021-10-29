import { useEffect, useState } from 'react'

const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('./../doctors.json').then(res => res.json()).then(data => setDoctors(data)).finally(() => setIsLoading(false));
    }, []);

    return { doctors, isLoading };
}

export default useDoctor;
