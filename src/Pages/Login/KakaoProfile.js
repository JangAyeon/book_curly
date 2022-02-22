import React, { useState } from "react";
import { decrypt } from "../../Components/CryptoJS/CryptoJS";

const UserInfo = (data) => {
  //console.log("User", decrypt(localStorage.getItem("User"), "User"));
  console.log(data);

  return (
    <div className="Profile">
      <div className="basic_info">
        <div className="basic_info_img">
          <img src={data.img} alt="user_img"></img>
        </div>
        <div className="basic_info_req">
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
      </div>
      <div className="extra_info">
        <div className="extra_sex">
          <span> 성별 > </span>
          <span> {data.gender}</span>
        </div>
        <div className="extra_birth">
          <span> 생일 ></span>
          <span> {data.birth}</span>
        </div>

        <div className="extra_age">
          <span> 연령층 > </span>
          <span>{data.age}</span>
        </div>
      </div>
    </div>
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
