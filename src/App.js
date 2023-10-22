import React, { useState } from 'react';
import { Header } from './components';
import { Cart, Home } from './scss/Pages';
import { Routes, Route } from "react-router";
import axios from 'axios'


function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })


  }, [])



  return (

    <div className="wrapper">
      <Header />
      <div className="content" >
        <Routes>
          <Route path='/' element={<Home items={pizzas} />}> </Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>


      </div>
    </div>

  );
}

export default App;


