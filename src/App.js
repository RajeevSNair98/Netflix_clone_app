import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import {originals,action,comedy,romance, horror} from './urls'

function App() {
  return (
   <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix originals'/>
    <Rowpost url={action} title='Action' isSmall={true}/>
    <Rowpost url={comedy} title='Comedy' isSmall={true}/>
    <Rowpost url={romance} title='Romance' isSmall={true}/>
    <Rowpost url={horror} title='Horror' isSmall={true}/>
   </div>
  );
}

export default App;
