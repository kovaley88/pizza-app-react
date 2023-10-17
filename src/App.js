import React from 'react';
import { Header } from './components';
import { Cart, Home } from './scss/Pages';
import { Routes, Route } from "react-router";


function App() {

  return (

    <div className="wrapper">
      <Header />
      <div className="content" >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>


      </div>
    </div>

  );
}

export default App;


