import React from "react";
import { BsTrash } from "react-icons/bs";

export default function ListItems({ list, deleteList }) {
  return (
    <ul>
      {list &&
        list.map((item, i) => {
          return (
            <li
              key={i}
              className={item.price[0] === "-" ? "expense-box" : "income-box"}
            >
              {item.text}
              <span>{item.price}</span>
              <BsTrash
                onClick={() => deleteList(item.id)}
                className="delete-btn"
              />
            </li>
          );
        })}
    </ul>
  );
}
