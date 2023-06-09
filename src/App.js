import React, {useState,useReducer,useEffect} from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter, Routes, Route,
  } from 'react-router-dom';
import './App.css';
import Number from "./Number";
import Operator from "./Operator";

function App(){
  const [screen1,setValue]=useState('');

  function setscreen(newvalue){
    setValue(newvalue);
  }
    return <div id="top-level">
            <h2>Calculator</h2>
            <div id="Calculatorcontainer"> 
              <h1 id="display">{screen1}</h1>
                <div id="sub2">
                  <Number currentvalue={screen1} handlerf={setscreen}/>
                  <Operator currentvalue={screen1} handlerf={setscreen}/>
                </div> 
            </div>
           </div>
}
export default App;
  