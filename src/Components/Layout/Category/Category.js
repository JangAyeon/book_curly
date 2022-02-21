import "./Category.scss";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import { OrderStandard } from "../../../Shared/OrderStandard";
//CategoryArray[0].key

function Category({ CategoryArray, Show }) {
  const [CurrentClick, setCurrentClick] = useState(CategoryArray[0].key);
  const [PrevClick, setPrevClick] = useState(null);
  const [Btntext, setBtntext] = useState(CategoryArray[0].value);

  const setActive = (e) => {
    setCurrentClick(e.target.getAttribute("value"));
    setBtntext(e.target.getAttribute("name"));
  };

  useEffect(
    (e) => {
      if (CurrentClick !== null) {
        //console.log(CurrentClick);
        let current = document.querySelector(
          `div.Category ul.list li[value="${CurrentClick}"]`
        );
        // console.log("curr_click", current);
        current.setAttribute("class", "active");
      }

      if (PrevClick !== null) {
        console.log(PrevClick);
        let prev = document.querySelector(
          `div.Category ul.list li[value="${PrevClick}"]`
        );
        //console.log("prev_click", prev);
        prev.setAttribute("class", "");
      }
      setPrevClick(CurrentClick);
    },
    [CurrentClick]
  );

  return (
    <div className="Category">
      <ul className="list">
        {CategoryArray.map((Category) => (
          <li
            onClick={(e) => {
              setActive(e);
            }}
            value={Category.key}
            name={Category.value}
          >
            {Category.value}
          </li>
        ))}
      </ul>

      {Show === "Carousel" ? (
        <>
          <Carousel params={CurrentClick} />
          <button className="category_btn">
            <Link
              to={{
                pathname: "/list/bestSeller",
                state: {
                  value: Btntext,
                  key: CurrentClick,
                },
              }}
            >
              {Btntext} 전체보기
            </Link>
          </button>
        </>
      ) : (
        <Grid id={CurrentClick} orders={OrderStandard} />
      )}
    </div>
  );
}

export default Category;
