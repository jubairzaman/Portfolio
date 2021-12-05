import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import TopNav from '../../Shared/TopNav/TopNav';
import Skills from '../../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>


        </div>
    );
};

export default Home;