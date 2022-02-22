import React, { useState } from "react";
import { decrypt } from "../../Components/CryptoJS/CryptoJS";
import "./KakaoProfile.scss";

import { Title } from "../../Components/Layout/Title/Title";

const UserInfo = (data) => {
  //console.log("User", decrypt(localStorage.getItem("User"), "User"));
  console.log(data);

  return (
    <>
      <Title Title={"내 정보"} />
      <div className="Profile">
        <div className="basic_info">
          <div className="basic_info_img">
            <img src={data.img} alt="user_img"></img>
          </div>
          <div className="basic_info_req">
            <p className="name">{data.name}님</p>
            <p className="email">{data.email}</p>
          </div>
        </div>
        <div className="extra_info">
          <div className="extra_sex">
            <p className="category"> 성별 ></p>
            <p> {data.gender}</p>
          </div>
          <div className="extra_birth">
            <p className="category"> 생일 > </p>
            <p>{data.birth}</p>
          </div>

          <div className="extra_age">
            <p className="category"> 연령층 ></p>
            <p> {data.age}</p>
          </div>
        </div>
      </div>
    </>
  );
};

function GetProfile() {
  const decrypt_info = decrypt(localStorage.getItem("User"), "User");
  const [Profile, setProfile] = useState(decrypt_info);

  console.log(Profile.age_range);
  return (
    <>
      <UserInfo
        age={Profile.age_range}
        name={Profile.profile.nickname}
        email={Profile.email}
        gender={Profile.gender}
        birth={Profile.birthday}
        img={Profile.profile.thumbnail_image_url}
      />
    </>
  );
}

export default GetProfile;

/*
       
        
       
       
        
     */
