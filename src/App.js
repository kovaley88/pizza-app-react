import React, { useState } from 'react';
import { Header } from './components';
import { Cart, Home } from './scss/Pages';
import { Routes, Route } from "react-router";


function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas);
    })

  }, [])

  console.log(pizzas)

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


