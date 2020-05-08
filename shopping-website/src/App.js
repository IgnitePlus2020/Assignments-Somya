import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom'

import HomePage from './Components/Pages/HomePage/HomePage'
import ShopCategory from './Components/Pages/ShopCategory/ShopCategory'

import NavigationMenuBar from './Components/Header/NavigationMenuBar'

import './App.css';
import OrderFormPage from './Components/Pages/OrderFormPage/OrderFormPage';




function App() {
  return (
    <div className="App">
        <NavigationMenuBar/>
        <BrowserRouter>
        <div>
          
            <Route exact='true' path='/' component={HomePage}/>
            <Route exact='true' path='/category' component={ShopCategory}/>
            <Route  exact='true' path='/order' component={OrderFormPage}/>
          

        </div>
        </BrowserRouter>
     
     
    </div>
  );
}

export default App;


