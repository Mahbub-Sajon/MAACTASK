import React from 'react';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import bg from '../../img/bg-img.png'
import Tab from '../Components/Tab/Tab';
import Feature from '../Components/Feature/Feature';

const Home = () => {
    return (
       <div>
         <div style={{
            backgroundImage: `url(${ bg })`
        }}>
            <Nav></Nav>
            <Header></Header>
           
        </div>
        <Tab></Tab>
        <Feature></Feature>
       </div>
    );
};

export default Home;