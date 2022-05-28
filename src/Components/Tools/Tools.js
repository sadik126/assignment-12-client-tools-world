import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('https://calm-taiga-28787.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])


    return (
        <div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Tools;