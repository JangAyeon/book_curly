import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Grid.scss";
import { Sortby } from "../Title/Title";

function GridItems({
  title,
  id,
  image,

  salerate,
  saleprice,
  author,
  publisher,
}) {
  return (
    <div className="Item">
      <div className="Item_img">
        <img alt={id} src={image}></img>
      </div>
      <div className="Item_info">
        <p className="title">{title}</p>
        <div className="sub_info">
          <span className="author">{author}</span>
          <span className="publisher">{publisher}</span>
        </div>
        <div className="sale_info">
          <span className="price">{saleprice}원</span>
          <span className="sale">{salerate}% ↓</span>
        </div>
      </div>
    </div>
  );
}

const Grid = ({ id, orders, type, query, header }) => {
  console.log("Grid", id, type, header);

  const [GetData, setGetData] = useState([]);
  const [value, setvalue] = useState("");

  async function get() {
    try {
      let response = null;
      if (type != "search") {
        console.log("기타 요청");
        response = await axios.get(
          `https://book.interpark.com/api/${type}.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&query=${query}&categoryId=${id}`
        );
      }

      if (type === "search") {
        console.log("검색요청");
        response = await axios.get(
          `https://book.interpark.com/api/${type}.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&query=${query}`
        );
      }
      console.log("Response DATA : ", response.data.item);
      setGetData(response.data.item);
    } catch (error) {
      //응답 실패
      console.log("Carousel Error : ", error);
    }
  }

  //비동기적 동작
  useEffect(() => {
    console.log("API 요청");

    get();
  }, [id, type]);

  //비동기적 동작
  useEffect(() => {}, [value]);

  const Reorder = (standard) => {
    //console.log(standard);
    setvalue(standard);
    var type;
    if (standard.indexOf("_asc") !== -1) {
      type = "asc";
      standard = standard.replace(/_asc/g, "");
    } else if (standard.indexOf("_desc") !== -1) {
      type = "desc";
      standard = standard.replace(/_desc/g, "");
    }

    console.log(type, standard);

    if (GetData) {
      setGetData(
        GetData.sort(function (a, b) {
          var x = a[standard];
          var y = b[standard];
          if (type === "desc") {
            return x > y ? -1 : x < y ? 1 : 0;
          } else if (type === "asc") {
            return x < y ? -1 : x > y ? 1 : 0;
          }
        })
      );
    }
    console.log(GetData);
  };

  return (
    <>
      <Sortby orders={orders} reorder={Reorder} header={header} />
      <div className="Grid">
        {(GetData || value !== "") &&
          GetData.map((item, index) => (
            <React.Fragment key={index}>
              <GridItems
                className="items"
                index={index}
                title={item.title}
                id={item.itemId}
                image={item.coverLargeUrl}
                saleprice={item.priceSales}
                salerate={item.discountRate}
                author={item.author}
                publisher={item.publisher}
              />
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default Grid;
