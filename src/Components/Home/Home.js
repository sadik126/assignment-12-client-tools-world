import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Bussiness from '../Bussiness/Bussiness';
import Contact from '../Contact/Contact';
import Display from '../Display/Display';
import Tool from '../Tools/Tool';



const Home = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('https://calm-taiga-28787.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <Banner></Banner>

            <h2 className='text-3xl text-center uppercase font-mono mt-9'>Our <span className='text-primary'>products</span> </h2>

            <div className="container mx-auto">
                <div className="row flex">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                            tools.slice(0, 3).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                        }

                    </div>

                </div>

            </div>
            <h2 className='text-3xl text-center uppercase font-mono mt-16'>The <span className='text-primary'>Bussiness summary</span> </h2>
            <Bussiness></Bussiness>
            <Display></Display>
            <Contact></Contact>

        </div>
    );
};

export default Home;