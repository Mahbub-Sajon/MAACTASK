import React from 'react';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import bg from '../../img/bg-img.png'
import Tab from '../Components/Tab/Tab';
import Feature from '../Components/Feature/Feature';
import About from '../Components/About/About';

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

       <div style={{
            backgroundImage: `url(${ bg })`,
        }}>
       <About ></About>
       </div>
       </div>
    );
};

export default Home;