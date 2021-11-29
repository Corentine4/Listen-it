import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Musics = () => {

    // Make a hook
    const [data, setData] = useState([ ]);

        useEffect(() => {

            // Get the api by the link
            axios.get('https://polar-earth-15538.herokuapp.com/Music')
            
            // then = the promise
            .then((res) => setData(res.data));

            console.log(data);

        }, [] );
        // Empty callback [] -> Don't have endless requests


    return <div></div>;
    
};

export default Musics;