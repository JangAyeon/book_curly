/*
POST
/member
application/json
{
    "request": {
        "payload": {
            "Info": {
                "memberId" : "rottenpear99", 
                "memberPwd" : "rott0000000",
                "username" : "Chaerin Lee",
                "email" : "rottenpear99@naver.com",
                "address" : "서울특별시 마포구 공덕동",
                "birthDate" : 1993-11-25,
                "phone" : "01038307035",
                "sex" : 1
            }
        }
    }
}
*/

import React, { useState } from "react";
import Post from "../../Components/Post/Post";
import "../Signup/Signup.scss";

const Signup = () => {
  const [inputs, setInputs] = useState({
    Id: "",
    showIdInfo: false,
    Pwd: "",
    showPwdInfo: false,
    RePwd: "",
    showRePwdInfo: false,
    Username: "",
    Phone: "",
    Email: "",
    showAddressPop: false,
    Address: "",
    Zonecode: "",
    Sex: 1,
    BirthDate: "",
  });

  const {
    Id,
    showIdInfo,
    Pwd,
    showPwdInfo,
    RePwd,
    showRePwdInfo,
    Username,
    Phone,
    Email,
    showAddressPop,
    Address,
    Zonecode,
    Sex,
    BirthDate,
  } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onClick_Info = (e) => {
    console.log(e.target);
    let name = `show${e.target.name}Info`;
    setInputs({
      ...inputs,
      [name]: true,
    });
  };

  const onClick_Pop = (e) => {
    console.log(e.target.name);
    let name = `show${e.target.name}Pop`;
    setInputs({
      ...inputs,
      [name]: true,
    });
  };

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
        <div className="signup_Id_wrap">
          <div className="signup_Id_title">
            아이디<span className="ico">*</span>
          </div>
          <div className="signup_Id_block">
            <input
              className="signup_Id_input"
              type="text"
              name="Id"
              placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
              maxLength="16"
              onChange={onChange}
              value={Id}
              onClick={onClick_Info}
            />
            {showIdInfo ? (
              <div className="signup_Id_info">
                <li>6자 이상의 영문과 숫자를 조합</li>
                <li> 아이디 중복 확인</li>
              </div>
            ) : null}
          </div>
          <div className="signup_Id_check">중복확인</div>
        </div>

        <div className="signup_Pw_wrap">
          <div className="signup_Pw_title">
            비밀번호<span className="ico">*</span>
          </div>
          <div className="signup_Pw_block">
            <input
              className="signup_Pw_input"
              name="Pwd"
              placeholder="비밀번호를 입력해주세요"
              maxLength="16"
              type="text"
              onChange={onChange}
              value={Pwd}
              onClick={onClick_Info}
            />
            {showPwdInfo ? (
              <div className="signup_Id_info">
                <li>10자 이상 입력</li>
                <li>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</li>
                <li>동일한 숫자 3개 이상 연속 사용 불가</li>
              </div>
            ) : null}
          </div>
        </div>

        <div className="signup_RePw_wrap">
          <div className="signup_RePw_title">
            비밀번호 확인<span className="ico">*</span>
          </div>
          <div className="signup_RePw_block">
            <input
              className="signup_RePw_input"
              type="text"
              name="RePwd"
              placeholder="비밀번호를 한번 더 입력해주세요"
              maxLength="16"
              onChange={onChange}
              value={RePwd}
              onClick={onClick_Info}
            />
            {showRePwdInfo ? (
              <div className="signup_Id_info">
                <li>동일한 비밀번호를 입력해주세요</li>
              </div>
            ) : null}
          </div>
        </div>

        <div className="signup_Username_wrap">
          <div className="signup_Username_title">
            이름<span className="ico">*</span>
          </div>
          <input
            className="signup_Username_input"
            type="text"
            name="Username"
            placeholder="이름을 입력해주세요"
            onChange={onChange}
            value={Username}
          />
        </div>

        <div className="signup_Email_wrap">
          <div className="signup_Email_title">
            이메일<span className="ico">*</span>
          </div>
          <input
            className="signup_Email_input"
            type="text"
            name="Email"
            placeholder="예:markerkeyrly@kurly.com"
            onChange={onChange}
            value={Email}
          />
          <div className="signup_Email_check">중복확인</div>
        </div>

        <div className="signup_Phone_wrap">
          <div className="signup_Phone_title">
            휴대폰<span className="ico">*</span>
          </div>
          <input
            className="signup_Phone_input"
            type="text"
            name="Phone"
            placeholder="숫자 입력해주세요"
            pattern="[0-9]*"
            onChange={onChange}
            value={Phone}
          />
          <div className="signup_Phone_check">중복확인</div>
        </div>

        <div className="signup_Address_wrap">
          <div className="signup_Address_title">
            주소 <span className="ico">*</span>
          </div>
          <div className="signup_Address_block">
            {showAddressPop ? (
              <Post
                getData={(fullAddress, zoneCode) => {
                  console.log(fullAddress, zoneCode);
                  setInputs({
                    ...inputs,
                    Address: fullAddress,
                    Zonecode: zoneCode,
                    showAddressPop: false,
                    //핸드폰번호 text아닌 숫자로 입력될까봐...
                  });
                }}
              />
            ) : null}
            <div className="signup_Address_full">
              <div className="signup_Address_input">
                {Zonecode ? <input type="text" value={Zonecode}></input> : null}
                {Address ? <input type="text" value={Address}></input> : null}

                {!(Zonecode && Address) ? (
                  <button name="Address" onClick={onClick_Pop}>
                    🔍︎ 주소 검색
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="나머지 주소를 입력하시오"
                      onChange={(e) => {
                        setInputs({
                          ...inputs,
                          Address: `${Address} ${String(e.target.value)}`,
                        });
                        console.log(inputs);
                      }}
                    ></input>
                  </>
                )}
              </div>

              {!(Zonecode && Address) ? null : (
                <div className="signup_Address_btn">
                  <button name="Address" onClick={onClick_Pop}>
                    🔍︎ 주소 재검색
                  </button>
                </div>
              )}
            </div>
            <div className="signup_Address_info">
              {Zonecode && Address ? <p>샛별 배송 가능 지역</p> : null}
              <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
            </div>
          </div>
        </div>

        <div className="signup_Sex_wrap">
          <div className="signup_Sex_title">성별</div>
          <div className="signup_Sex_block" onClick={onChange}>
            <label>
              <input type="radio" name="Sex" value="1" defaultChecked />
              남자
            </label>
            <label>
              <input type="radio" name="Sex" value="2" />
              여자
            </label>
            <label>
              <input type="radio" name="Sex" value="0" />
              선택 안함
            </label>
          </div>
        </div>

        <div className="signup_Birth_wrap">
          <div className="signup_Birth_title">생년월일</div>
          <div className="signup_Birth_block">
            <input
              type="text"
              name="BirthDate"
              onChange={onChange}
              placeholder="YYYY / MM / DD"
              maxLength="8"
              size="14"
              pattern="[0-9]*"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
