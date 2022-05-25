import React, { useEffect, useState } from 'react';

const Tools = () => {
    const [tool, setTool] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/tools')
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])


    return (
        <div>

        </div>
    );
};

export default Tools;