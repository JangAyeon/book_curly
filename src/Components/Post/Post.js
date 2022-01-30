import React from "react";
import DaumPostcode from "react-daum-postcode";
//https://velog.io/@limes/React-Postcode-Daum-%EC%9A%B0%ED%8E%B8-%EB%B2%88%ED%98%B8-%EC%B0%BE%EA%B8%B0-api

const Post = ({ getData }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    getData(fullAddress, data.zonecode);

    console.log("✔ post 컴포넌트 : ", data.zonecode);
    console.log("✔ post 컴포넌트 : ", fullAddress);
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
