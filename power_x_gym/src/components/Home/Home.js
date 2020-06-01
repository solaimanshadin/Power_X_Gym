import React from 'react';
import Banner from '../Banner/Banner';
import Catalogue from '../Catalogue/Catalogue';
import About from '../About/About';
import Training from '../Training/Training';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catalogue></Catalogue>
           <About></About>
           <Training></Training>
           <Footer></Footer>
        </div>
    );
};

export default Home;