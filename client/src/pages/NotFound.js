import React from 'react';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div className="notfound">
            <Navigation/>
            <h1>Erreur 404</h1>
        </div>
    );
};

export default NotFound;