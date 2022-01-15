import React, { Component } from "react";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";
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
