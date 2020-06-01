import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
