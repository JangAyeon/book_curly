import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  /*생성자
    {id, password, token}*/

  /*input 제어
    id input 칸에 입력 -> id로 설정
    Pw input 칸에 입력 -> Pw로 설정*/

  /*서버로 user 로그인 전달하고 결과 받기
        1. 로그인 정보 전달
        2. json으로 response 받아오기
            2-1.올바른 입력 
                ????????
            2-2.틀린 입력
                alert("아이디 또는 비밀번호 입력하세요")
    */

  //회원가입 페이지로 이동

  render() {
    return (
      <div>
        {/*Navbar 추가 : 라우팅*/}
        <div className="login_main">
          <div className="login_content">
            <div className="login_section">
              <h3 className="login_title">로그인</h3>
              <div className="login_container">
                <form className="login_form">
                  <input
                    className="login_Id"
                    type="text"
                    size="20"
                    /*원본 사이트에 value 속성 있음.. 왜???*/
                    placeholder="아이디를 입력해주세요"
                  ></input>
                  <input
                    className="login_Pw"
                    type="text"
                    size="20"
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
                      <a class="link">아이디 찾기</a>
                      <span className="bar">|</span>
                      <a class="link">비밀번호 찾기</a>
                    </div>
                  </div>
                  <button className="login_btn">로그인</button>
                </form>
                <button className="loginTosignup">회원가입</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
