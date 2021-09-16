import React from'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Header/>

    <h3 className="h3">  Welcome</h3>
    

    <Home/>

    <Footer/>
    </div>
  );
}

export default App;
