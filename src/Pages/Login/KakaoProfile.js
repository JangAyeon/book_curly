import React from "react";
import { decrypt } from "../../Components/CryptoJS/CryptoJS";

const Profile = () => {
  console.log("User", decrypt(localStorage.getItem("User"), "User"));
  return <div>프로필</div>;
};

export default Profile;
