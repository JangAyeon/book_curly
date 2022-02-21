import React, { useState, useEffect } from "react";
import "./Title.scss";

export const Title = ({ Title, SubTitle }) => {
  console.log(Title, SubTitle);
  return (
    <div className="Title">
      <span> {Title}</span>
      <p>{SubTitle}</p>
    </div>
  );
};

export const Sortby = ({ orders, reorder, header }) => {
  const [CurrentClick, setCurrentClick] = useState(null);
  const [PrevClick, setPrevClick] = useState(null);

  console.log("Sort by", PrevClick, CurrentClick);
  const setActive = (e) => {
    setPrevClick(CurrentClick);
    console.log(e.target.dataset.type);
    // setPrevClick(null);
    setCurrentClick(e.target.dataset.type);
    //console.log(CurrentClick);
    reorder(e.target.dataset.type);
  };

  useEffect(
    (e) => {
      console.log("list", PrevClick, CurrentClick);
      if (CurrentClick !== null) {
        console.log(CurrentClick);
        let current = document.querySelector(
          `div.Sortby ul.orders li[data-type="${CurrentClick}"]`
        );
        console.log("curr_click", current);
        current.className += " active";
      }

      if (PrevClick !== null) {
        //console.log(PrevClick);
        let prev = document.querySelector(
          `div.Sortby ul.orders li[data-type="${PrevClick}"]`
        );
        //console.log("prev_click", prev);
        prev.setAttribute("class", "order");
      }
      // setPrevClick(CurrentClick);
    },
    [CurrentClick]
  );

  useEffect(() => {
    console.log("제목 바뀜");

    let All = document.querySelectorAll(`div.Sortby ul.orders li`);
    All.forEach((li) => {
      li.setAttribute("class", "order");
    });
  }, [header]);

  return (
    <div className="Sortby">
      <ul className="cnt">
        <li>총 30개</li>
      </ul>
      <ul className="orders">
        {orders.map((order, index) => {
          // console.log(order);
          if (index != orders.length - 1) {
            return (
              <>
                <li className="order" onClick={setActive} data-type={order.key}>
                  {order.value}
                </li>
                <span>|</span>
              </>
            );
          } else {
            return (
              <li className="order" onClick={setActive} data-type={order.key}>
                {order.value}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
