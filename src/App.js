import React from'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import{BrowserRouter as Router,Route} from 'react-router-dom'
import  RestaurantDetails from './components/RestaurantDetails'

function App() {


  return (
    <Router>
       <Header/>
      <div>
        <Route exact path='/'component={Home}/>
        <Route  path='/restaurants/:id'component={RestaurantDetails}/>


    

    

   
    </div> 
     <Footer/>
    </Router>
  );
}

export default App;
