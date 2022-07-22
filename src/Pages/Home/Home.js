import React from 'react';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import bg from '../../img/bg-img.png'

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${ bg })`
        }}>
            <Nav></Nav>
            <Header></Header>
        </div>
    );
};

export default Home;