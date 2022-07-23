import React from 'react';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import bg from '../../img/bg-img.png'
import Tab from '../Components/Tab/Tab';
import Feature from '../Components/Feature/Feature';
import About from '../Components/About/About';
import Faq from '../Components/Faq/Faq';
import bg2 from '../../img/bg2.png'

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
      <div style={{
            backgroundImage: `url(${ bg2 })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
        }}>
      <Faq></Faq>
      </div>
       </div>
    );
};

export default Home;