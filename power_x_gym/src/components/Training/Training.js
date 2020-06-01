import React from 'react';
import './Training.css';

const Training = () => {
    return (
        <div className="training">
        <div className="container">
          <h1 className="training-program">TRAINING <span className="program">PROGRAMS</span></h1>
          <div className="row">
            <div className="col-md-6 bruce">
               <label className="highlight-training font-weight-bold">YOGA TRAINING SESSION</label>
            </div>
            <div className="col-md-6 arthur">
               <label className="highlight-training font-weight-bold">CARDIO TRAINING SESSION</label>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Training;