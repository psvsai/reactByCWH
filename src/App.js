import  './App.css';
import React from 'react';
// import BasicButton from './BasicButton.js';

function App() {
  return (
  
    <div className="start">
      <h3 className="details">please enter your detalis</h3>
      <h1 className="Basicbutton">Welcome to my app</h1>
      <button className="Basicbutton">Click me</button>
      {/* <BasicButton/> */}
      <div className="username">
        <div>
          <label for = "username"></label>
          <input
          type = "text"
          id = "username"
          placeholder = "Email address"
          />
        </div>
      </div>
      <div className="password">
        <div>
          <label for = "password"></label>
          <input
          type = "text"
          id = "password"
          placholder = "password"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
