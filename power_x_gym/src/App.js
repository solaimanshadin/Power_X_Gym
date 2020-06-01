import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
}

export default App;
