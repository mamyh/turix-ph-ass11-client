import React, { useState } from 'react'

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    return {
        user
    }
}

export default useFirebase
