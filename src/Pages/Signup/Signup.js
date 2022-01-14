import React, { Component } from "react";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";
import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="signup_main">
        <div className="signup_content">
          <p className="signup_sub">
            <span className="ico">*</span>
            필수입력사항
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
