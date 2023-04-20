import React from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Register from './components/Register';
import Movie from './components/Movie';




function App(): JSX.Element {
  return (
    <div>

    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Favorites" element={<Favorites></Favorites>}></Route>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Register" element={<Register></Register>}></Route>
      <Route path="/Movie" element={<Movie></Movie>}></Route>
    </Routes>
    </div>
    
  );
}

export default App;
