import axios from "axios";
import React, { useState } from "react";
import "./Login.scss";
import { Link, Redirect } from "react-router-dom";

import KakaoAuth from "./KakaoAuth";

/*
URL : 'https://fakestoreapi.com/auth/login',
{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })


200 response {
    token: "eyJhbGciOiJIUzI1NiIsInR"
}
*/

const Login = () => {
  const [inputs, setInputs] = useState({
    Id: "",
    Pwd: "",
  });

  const { Id, Pwd } = inputs;

  const [login, setlogin] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onLogin = async () => {
    try {
      //로그인 id와 pwd 확인
      const { Id, Pwd } = inputs;
      console.log("✔ login ID : ", Id, ", Pwd : ", Pwd);

      //POST login 시도
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: Id,
        password: Pwd,
      });
      //POST 응답 성공
      console.log("✔ login token", response.data.token);

      //token 발급
      const token = response.data.token;

      //token 발급된 것 localstorage 저장
      if (token) {
        localStorage.setItem("JWT token", token);
        setlogin(true);
      } else {
        window.alert("login server Error!!!");
      }
    } catch (error) {
      //응답 실패
      console.log("✔ login error : ", error);
    }
  };

  return (
    <div>
      <div className="login_main">
        <div className="login_content">
          <div className="login_section">
            <h3 className="login_title">로그인</h3>
            <div className="login_container">
              <div className="login_form">
                <input
                  className="login_Id"
                  type="text"
                  name="Id"
                  onChange={onChange}
                  value={Id}
                  placeholder="아이디를 입력해주세요"
                />
                <input
                  className="login_Pw"
                  type="text"
                  name="Pwd"
                  value={Pwd}
                  onChange={onChange}
                  placeholder="비밀번호를 입력해주세요"
                ></input>

                <div className="login_checkbox">
                  <lable className="label_checkbox checked">
                    <input
                      className="chk_security"
                      type="checkbox"
                      value="y"
                    ></input>
                    보안 접속
                  </lable>
                  <div className="login_search">
                    <a className="link">아이디 찾기</a>
                    <span className="bar">|</span>
                    <a className="link">비밀번호 찾기</a>
                  </div>
                </div>
                <button className="login_btn" onClick={onLogin}>
                  로그인
                  {login && <Redirect to="/book_curly" />}
                </button>
              </div>
              <button className="loginTosignup">
                <Link to="/signup">회원가입</Link>
              </button>
              <button
                className="KakaoLogin_btn"
                data-type="login"
                onClick={KakaoAuth}
              >
                카카오계정으로 로그인
              </button>

              <button
                className="KakaoLogout_btn"
                data-type="logout"
                onClick={KakaoAuth}
              >
                카카오계정으로 로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//POST 정상처리하고 Local에 심고 메인 페이지로 돌아가게 해야함

export default Login;
