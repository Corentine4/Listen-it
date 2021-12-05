import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Musics = () => {

    // Stock into the State
    const [data, setData] = useState( [] );

        // Make a hook
        useEffect(() => {

            // Get the api by the link
            axios
            .get('https://polar-earth-15538.herokuapp.com/Music')
            
            // then = the promise
            .then((res) => setData(res.data));

        }, [ ]);
        // [] Dependency array -> Don't have endless requests

    return(
        <div className="musics">
            <ul>
                {data.map((Musics) => (
                    <Card Musics={Musics} key={Musics.name}/> // Props -> give datas
                ))}
            </ul>
        </div>
    );
    
};

export default Musics;