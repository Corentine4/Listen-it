import React from 'react';
import Navigation from '../components/Navigation';

// Import the logo
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div className="home">
            <Logo/>
            <Navigation/>
            <h1>Accueil</h1>
        </div>
    )
}

export default Home;