import React from "react";
import DaumPostcode from "react-daum-postcode";
//https://velog.io/@limes/React-Postcode-Daum-%EC%9A%B0%ED%8E%B8-%EB%B2%88%ED%98%B8-%EC%B0%BE%EA%B8%B0-api

const Post = ({ getData }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        console.log("✔ post 컴포넌트 bname : ", data.bname); //신갈동
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        console.log("✔ post 컴포넌트 buildingName : ", data.buildingName); //녹원마을새천년그린빌1단지아파트
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      console.log("✔ post 컴포넌트 extraAddress : ", extraAddress); //신갈동, 녹원마을새천년그린빌1단지아파트
      console.log("✔ post 컴포넌트 address : ", data.address); //경기 용인시 기흥구 새천년로 13
    }
    console.log("✔ post 컴포넌트 zonecode : ", data.zonecode); //16958
    console.log("✔ post 컴포넌트 fullAddress : ", fullAddress);
    getData(
      data.address,
      data.bname,
      data.buildingName,
      fullAddress,
      data.zonecode
    );
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "20%",
    width: "400px",
    height: "400px",
    padding: "7px",
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={handleComplete}
      />
    </>
  );
};

export default Post;
