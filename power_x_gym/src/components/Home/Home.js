import React from 'react';
import Banner from '../Banner/Banner';
import Catalogue from '../Catalogue/Catalogue';
import About from '../About/About';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catalogue></Catalogue>
           <About></About>
        </div>
    );
};

export default Home;