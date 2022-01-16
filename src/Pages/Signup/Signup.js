import React, { Component } from "react";
//import { Link, withRouter } from "react-router-dom";
import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="signup_main">
        <div className="signup_title">
          <h2>회원가입</h2>
          <p className="signup_sub">
            <span className="ico">*</span>
            필수입력사항
          </p>
        </div>
        <div className="signup_content">
          <table className="tbl_signup">
            <tbody>
              <tr className="signup_id">
                <th>
                  아이디
                  <span className="ico">
                    {" "}
                    *<span className="screen_out">필수항목</span>
                  </span>
                </th>
                <td>
                  <input
                    type="text"
                    name="id"
                    maxlength="16"
                    label="아이디"
                    placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    data-validator="false"
                    className="Signup_Input"
                    onChange={this.handleInput}
                    onClick={this.handleShowIdGuide}
                  />
                  {/*
                  <Link
                    to="/"
                    className="Signup-checkBtn"
                    onClick={this.checkId}
                  >
                    중복확인
                  </Link>*/}
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>

              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>

              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>

              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Signup;
