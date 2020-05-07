import React from 'react';
import {Switch,Route} from 'react-router-dom'

import './App.css';
import Dropdown from './Components/Dropdown/dropdown'
import ShopPage from './Components/Pages/Shop/Shop'
import Table from './Components/Table/Table'

function App() {
  return (
    <div className="App">
      <Dropdown/>
      <Table/>
     
     
    </div>
  );
}

export default App;


