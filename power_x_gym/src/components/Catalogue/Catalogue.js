import React from 'react';
import './Catalogue.css';
import div_one_img from '../../Images/Group 80.png';
import div_two_img from '../../Images/Group 81.png';
import div_three_img from '../../Images/Group 82.png';

const Catalogue = () => {
    return (
        <div className="catalogue my-5">
        <div className="container">
          <div className="row text-center">
                    <div className="card div_one py-2">
                        <img  src={div_one_img} alt=""/>
                        <h3 className="text-white">PROGRESSION</h3>
                        <p className="text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                    <div className="card div_two">
                        <img  src={div_two_img} alt=""/>
                        <h3 className="text">WORKOUT</h3>
                        <p className="text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                    <div className="card div_three">
                        <img  src={div_three_img} alt=""/>
                        <h3 className="text-white">NUTRITION</h3>
                        <p className="text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default Catalogue;