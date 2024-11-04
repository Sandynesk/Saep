import React, { useState } from 'react';
import Profile from './components/Profile';
import DishList from './components/DishList';
import Login from './components/Login';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleLogin = (email) => {
        setUserEmail(email);
        setIsLoggedIn(true);
    };

    return (
        <div className="app">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <div className="home">
                    <div className="column profile-column">
                        <Profile />
                    </div>
                    <div className="column dish-list-column">
                        <DishList />
                    </div>
                    <div className="column empty-column">
                        <h2>Bem-vindo, {userEmail}!</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
