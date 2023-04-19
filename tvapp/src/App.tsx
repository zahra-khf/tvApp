import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';




function App(): JSX.Element {
  return (
    <div>

    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Register" element={<Register></Register>}></Route>
    </Routes>
    </div>
    
  );
}

export default App;
