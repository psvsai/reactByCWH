import  './App.css';
import React from 'react';
import  CountrySelect from './component/Autocomplete.js';
import Sidebar from './component/Sidebar.js';
// import BasicButton from './BasicButton.js';
// adding components into app.js pracrtice 
//22-01-2025

function App() {
  return (
  <>
  <main>
   <CountrySelect/>
   <Sidebar/>
  </main>

  </>
 
  );
}

export default App;
