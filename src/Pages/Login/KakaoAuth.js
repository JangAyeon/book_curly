import React from "react";
import { encrypt } from "../../Components/CryptoJS/CryptoJS";

const logoutKaKao = () => {
  if (!localStorage.getItem("kakao_d13afba05b7222903cff5f3a2226caa2")) {
    console.log("Not logged in");
    return;
  }
  window.Kakao.Auth.logout(function (response) {
    alert(response + " logout");
    localStorage.removeItem("User");
    window.location.href = "/book_curly";
  });
};

const loginKakao = () => {
  if (window.Kakao.Auth.getAccessToken()) {
    alert("Already logged in");
    return;
  }
  try {
    return new Promise((resolve, reject) =>
      window.Kakao.Auth.login({
        scope:
          "profile_nickname,profile_image,account_email,gender,age_range,birthday",
        success: function (response) {
          console.log(response);
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: (res) => {
              const kakao_account = res.kakao_account;
              localStorage.setItem("User", encrypt(kakao_account, "User"));

              window.location.href = "/book_curly";
            },
          });
        },
        fail: function (error) {
          console.log(error);
        },
      })
    );
  } catch (error) {
    console.log(error);
  }
};

const initKakao = (e) => {
  // 등록된 앱의 JavaScript key
  const KAKAO_CLIENT_ID = "17e19423194d296e3b3314276ed4ba08";

  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.

  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(KAKAO_CLIENT_ID);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }

  const Auth = e.target.dataset.type;
  if (Auth === "login") {
    loginKakao();
  } else if (Auth === "logout") {
    logoutKaKao();
  }
  console.log(e.target.dataset.type);

  return <></>;
};

export default initKakao;
