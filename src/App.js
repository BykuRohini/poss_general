import React,{useState} from 'react';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Ex from './Ex';
import {Fourth} from './Fourth.'
import {Fifth} from './Fifth'
import {Sixth} from './Sixth'
import {Seventh} from './Seventh'
import Rohini from './Rohini'
function App() {
 
  return (
    <div >
        
        
 
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/third' element={<Ex/>}/>
        <Route path='/fourth' element={<Fourth/>}/>
        <Route path='/fifth' element={<Fifth/>}/>
        <Route path='/sixth' element={<Sixth/>}/>
        <Route path='/seventh' element={<Seventh/>}/>
        </Routes>
        </BrowserRouter>
 
    </div>
  );
}

export default App;
