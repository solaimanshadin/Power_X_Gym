import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <section className="banner">
           <div className="container">
                <div className="row align-items-center text-white" style={{height:'100vh'}}>
                    <div className="col-md-6">
                        <h1 className="display-4 font-weight-normal text-uppercase">The best fitness Studio in Town</h1>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aspernatur delectus, nam adipisci neque eum numquam. Itaque, alias facilis expedita dignissimos, atque distinctio voluptatem, asperiores ullam quia quidem placeat ratione.</p>
                        <button className="banner-btn font-weight-bold">Join us</button>
                    </div>
                    <div className="col-md-6 video h-100">
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Banner;