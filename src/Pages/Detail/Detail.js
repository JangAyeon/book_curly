import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Detail.scss";

function GetsearchTarget(key) {
  if (100 <= key && key < 500) {
    if (key < 200) return "book";
    else if (key < 300) return "foreign";
    else if (key < 400) return "cd";
    else return "dvd";
  } else {
    return;
  }
}

function GetDetail(props) {
  console.log(props);
  const { title } = props.match.params;
  const { key } = props.location.state;
  const searchTarget = GetsearchTarget(key);

  console.log(key, title, searchTarget);
  const [TitleData, setTitleData] = useState([]);

  useEffect(() => {
    async function getIsbnData() {
      let response = null;
      console.log(
        `https://book.interpark.com/api/search.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&query=${title}&categoryId=${key}&searchTarget=${searchTarget}`
      );
      try {
        //응답 성공

        if (key && searchTarget) {
          response = await axios.get(
            `https://book.interpark.com/api/search.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&query=${title}&categoryId=${key}&searchTarget=${searchTarget}`
          );
        } else {
          response = await axios.get(
            `https://book.interpark.com/api/search.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&query=${title}`
          );
        }
        setTitleData(response.data.item[0]);
        console.log(response.data.item[0]);
        //console.log("ISBN Detail DATA : ", TitleData);
      } catch (error) {
        //응답 실패
        console.log("ISBN Detail Error : ", error);
      }
    }
    getIsbnData();
  }, [key, title]);

  return (
    <>
      {TitleData && (
        <Detail
          Title={TitleData.title}
          Img={TitleData.coverLargeUrl}
          Author={TitleData.author}
          Publisher={TitleData.publisher}
          PubDate={TitleData.pubDate}
          ReviewRank={TitleData.customerReviewRank}
          ReviewCount={TitleData.reviewCount}
          priceSales={TitleData.priceSales}
          discountRate={TitleData.discountRate}
          priceStandard={TitleData.priceStandard}
          description={TitleData.description}
          AdditionalLink={TitleData.link}
        ></Detail>
      )}
    </>
  );
}

const Detail = (props) => {
  return (
    <div className="Detail">
      <div className="img_wrap">
        <img src={props.Img} alt="book_cover"></img>
      </div>
      <div className="info">
        <div className="Title">{props.Title}</div>
        <div className="Author_Pub">
          <span>{props.Author}</span>
          <span> {props.Publisher}</span>
          <span>{props.PubDate} 출간</span>
        </div>
        <div className="Review">
          <span>*****</span>
          <span>{props.ReviewRank}</span>
          <span>(리뷰 {props.ReviewCount}개)</span>
        </div>
        <div className="Price">
          <p>북컬리 특가</p>
          <span className="priceSales">{props.priceSales}원 </span>
          <span className="discountRate">{props.discountRate}% ↓ </span>
          <span className="discountPrice">
            {props.priceStandard - props.priceSales}원 할인
          </span>
        </div>

        <div className="Description">{props.description}</div>

        <div className="btn">
          <div className="detail_link">
            <a href={props.AdditionalLink}> 인터파크 바로가기</a>
          </div>
          <div className="payment">결제</div>
        </div>
      </div>
    </div>
  );
};

export default GetDetail;
