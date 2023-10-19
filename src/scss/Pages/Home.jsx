import React from "react";
import { Categories, SortPopap, PizzaBlock } from "../../components";

function Home({ items }) {
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={(namePizza) => console.log(namePizza)}
            items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
          />

          <SortPopap items={["популярности", "цена", "алфавит"]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
