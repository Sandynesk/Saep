import React from 'react';
import logo from './OIP.png'; // Certifique-se de ter a imagem na pasta src

const Profile = () => {
    return (
        <div className="profile">
            <img src={logo} alt="Logo Sabor do Brasil" />
            <h1>Sabor do Brasil</h1>
            <hr style={{ borderColor: 'green', width: '100%' }} />
            <p>Conheça nossos pratos deliciosos!</p>
        </div>
    );
};

export default Profile;

