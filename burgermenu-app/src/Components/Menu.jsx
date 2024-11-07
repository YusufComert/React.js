import React from "react";
import { data } from "../helpers/data";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              content={menuItem.content}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
