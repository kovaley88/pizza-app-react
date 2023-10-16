import React, { useState } from "react";

// Реализация через классовый компонет :
// class Categories extends React.Component {
//   state = { activeItem: 3 };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           {items.map((namePizza, indexName) => (
//             <li
//               className={this.state.activeItem === indexName ? "active" : ""}
//               onClick={() => this.onSelectItem(indexName)}
//               key={`${namePizza}_${indexName}`}
//             >
//               {namePizza}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  console.log(items);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((namePizza, indexName) => (
            <li
              className={activeItem === indexName ? "active" : ""}
              onClick={() => onSelectItem(indexName)}
              key={`${namePizza}_${indexName}`}
            >
              {namePizza}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
