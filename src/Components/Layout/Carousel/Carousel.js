import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import "./Carousel.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function CarouselItems({
  title,
  id,
  image,
  standardprice,
  salerate,
  saleprice,
}) {
  return (
    <Link to={`/detail/${title}`}>
      <div className="Item">
        <div className="Item_img">
          <img alt={id} src={image}></img>

          <img
            className="Cart"
            alt="cart"
            src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
          ></img>
        </div>
        <div className="Item_info">
          <p className="title">{title}</p>
          <div className="sale_info">
            <span className="sale">{salerate}%</span>
            <span className="price">{saleprice}원</span>
          </div>

          <p className="price">{standardprice}원</p>
        </div>
      </div>
    </Link>
  );
}

//const URL ="https://fakestoreapi.com/products?limit=10";

const Carousel = ({ params }) => {
  //1. Carousel 라이브러리 세팅
  const settings = {
    dots: false, //슬라이드 밑에 점 보이게
    infinite: true, // 맨 앞과 맨 뒤 연결해 무한으로 넘어가도록
    speed: 500, // 넘기는 속도
    slidesToShow: 4, // 스크린에 보여지는 슬라이드 개수
    slidesToScroll: 4, // n장씩 뒤로 넘어가게 함
  };
  //console.log(URL);

  //2. Carousel 넣을 데이터 받아오기 GET
  const [GetData, setGetData] = useState([]);

  //비동기적 동작
  useEffect(() => {
    async function get() {
      try {
        //응답 성공
        const response = await axios.get(
          `https://book.interpark.com/api/bestSeller.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&categoryId=${params}`
        );
        console.log("Response DATA : ", response.data.item.slice(0, 10));
        setGetData(response.data.item.slice(0, 10)); //10개만 보이도록!
      } catch (error) {
        //응답 실패
        console.log("Carousel Error : ", error);
      }
    }
    get();
  }, [params]);

  //console.log("GetData : ", GetData);

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {GetData &&
          GetData.map((item, index) => (
            <React.Fragment key={index}>
              <CarouselItems
                className="items"
                title={item.title}
                id={item.itemId}
                image={item.coverLargeUrl}
                standardprice={item.priceStandard}
                saleprice={item.priceSales}
                salerate={item.discountRate}
              />
            </React.Fragment>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;

//어떤 정보 가져올지 & 설명 CSS 정하기
