import React from 'react';
import './Catalogue.css';
import div_one_img from '../../Images/Group 80.png';
import div_two_img from '../../Images/Group 81.png';
import div_three_img from '../../Images/Group 82.png';

const Catalogue = () => {
    return (
        <div className="catalogue">
        <div className="container">
          <div className="row">
                    <div className="card div_one">
                        <img  src={div_one_img} alt=""/>
                        <h1 className="a text-white">PROGRESSION</h1>
                        <p className="a text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam. Odio nemo nesciunt distinctio magnam at aut expedita fugit, iste culpa, quod qui, quis doloribus magni ipsum enim modi?</p>
                    </div>
                    <div className="card div_two">
                        <img  src={div_two_img} alt=""/>
                        <h1 className="text">WORKOUT</h1>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam. Odio nemo nesciunt distinctio magnam at aut expedita fugit, iste culpa, quod qui, quis doloribus magni ipsum enim modi?</p>
                    </div>
                    <div className="card div_three">
                        <img  src={div_three_img} alt=""/>
                        <h1 className="a text-white">NUTRITION</h1>
                        <p className="a text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam. Odio nemo nesciunt distinctio magnam at aut expedita fugit, iste culpa, quod qui, quis doloribus magni ipsum enim modi?</p>
                    </div>
              </div>
            </div>
        </div>
    );
};

export default Catalogue;