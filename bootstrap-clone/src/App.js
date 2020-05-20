import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <body>
     <div className ="main-body">
       <div className = "start-bootstrap">
     <img src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="Start BootStrap"/>
     
      </div>
      <button className ="button-main">Menu</button>
      <div className= "header">
          <text className = "header-text num1">SERVICE</text>
          <text className = "header-text num1">PORTFOLIO</text>
          <text className = "header-text num1">ABOUT</text>
          <text className = "header-text num1">TEAM</text>
          <text className = "header-text num1">CONTACT</text>
         
      </div> 

      <div className="body-text">
        <h3 className= "txt1">Welcome To Our Studio!</h3>
        <h1 className= "txt2">IT'S NICE TO MEET YOU</h1>
        <button className="button">Tell Me More</button>
      </div>
     </div>






   </body>
  );
}

export default App;
