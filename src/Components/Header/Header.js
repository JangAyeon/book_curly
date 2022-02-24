import React, { useState } from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { Header_Category } from "../../Shared/CategoryId";
import KakaoAuth from "../../Pages/Login/KakaoAuth";
import { decrypt } from "../CryptoJS/CryptoJS";

const getUsername = () => {
  return decrypt(localStorage.getItem("User"), "User").profile.nickname;
};

const UserMenu = () => {
  //console.log(localStorage.getItem("kakao_d13afba05b7222903cff5f3a2226caa2"))
  //getUsername();
  return (
    <div className="UserMenu">
      <ul className="UserMenu_List">
        {localStorage.getItem("kakao_d13afba05b7222903cff5f3a2226caa2") && (
          <>
            <li className="UserMenu_List_name">{getUsername()}</li>
            <li className="UserMenu_List_profile">
              <Link to="/myprofile">내정보</Link>
            </li>
            <li
              className="UserMenu_List_logout"
              data-type="logout"
              onClick={KakaoAuth}
            >
              로그아웃
            </li>
          </>
        )}
        {!localStorage.getItem("kakao_d13afba05b7222903cff5f3a2226caa2") && (
          <>
            <li className="UserMenu_List_join">
              <Link to="/signup">회원가입</Link>
            </li>
            <li className="UserMenu_List_login">
              <Link to="/login">로그인</Link>
            </li>
          </>
        )}

        <li className="UserMenu_List_ask">고객센터</li>
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/book_curly">
        <img
          className="Logo_img"
          src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
        />
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [Query, setQuery] = useState(null);
  const onChange = (e) => {
    const { value, name } = e.target;
    setQuery(value);

    console.log("Query", Query);
  };
  return (
    <div className="Navbar">
      <ul className="Navbar_main">
        <span>
          <li>
            전체 카테고리
            <ul className="Navbar_sub">
              <li>
                국내 도서
                <ul className="sub_sub">
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "소설",

                          key: 101,
                        },
                      }}
                    >
                      소설
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "시/에세이",

                          key: 102,
                        },
                      }}
                    >
                      시/에세이
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "예술/대중문화",

                          key: 103,
                        },
                      }}
                    >
                      예술/대중문화
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "사회과학",

                          key: 104,
                        },
                      }}
                    >
                      사회과학{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "역사와 문화",

                          key: 105,
                        },
                      }}
                    >
                      역사와 문화{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "잡지",

                          key: 107,
                        },
                      }}
                    >
                      잡지{" "}
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "만화",

                          key: 108,
                        },
                      }}
                    >
                      만화
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "유아",

                          key: 109,
                        },
                      }}
                    >
                      유아
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "아동",

                          key: 110,
                        },
                      }}
                    >
                      아동
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "가정과 생활",

                          key: 111,
                        },
                      }}
                    >
                      가정과 생활
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "청소년",

                          key: 112,
                        },
                      }}
                    >
                      청소년
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "초등학습서",

                          key: 113,
                        },
                      }}
                    >
                      초등학습서
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "중등학습서",

                          key: 129,
                        },
                      }}
                    >
                      중등학습서
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "고등학습서",

                          key: 114,
                        },
                      }}
                    >
                      고등학습서
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "국어/외국어",

                          key: 115,
                        },
                      }}
                    >
                      국어/외국어
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "자연과 과학",

                          key: 116,
                        },
                      }}
                    >
                      자연과 과학
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "경제/경영",

                          key: 117,
                        },
                      }}
                    >
                      경제/경영
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "자기계발",

                          key: 118,
                        },
                      }}
                    >
                      자기계발
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "인문",

                          key: 119,
                        },
                      }}
                    >
                      인문
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "종교/역학",

                          key: 120,
                        },
                      }}
                    >
                      종교/역학
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "컴퓨터/인터넷",

                          key: 122,
                        },
                      }}
                    >
                      컴퓨터/인터넷
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "자격서/수험서",

                          key: 123,
                        },
                      }}
                    >
                      자격서/수험서
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "취미/레저",

                          key: 124,
                        },
                      }}
                    >
                      취미/레저
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "전공도서/대학교재",

                          key: 125,
                        },
                      }}
                    >
                      전공도서/대학교재
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "건강/뷰티",

                          key: 126,
                        },
                      }}
                    >
                      건강/뷰티
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "여행",

                          key: 128,
                        },
                      }}
                    >
                      여행
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="sub">
                외국 도서
                <ul className="sub_sub">
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "어린이",

                          key: 201,
                        },
                      }}
                    >
                      어린이
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "ELT/사전",

                          key: 203,
                        },
                      }}
                    >
                      ELT/사전
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "문학",

                          key: 205,
                        },
                      }}
                    >
                      문학
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "경영/인문",

                          key: 206,
                        },
                      }}
                    >
                      경영/인문
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "예술/디자인",

                          key: 207,
                        },
                      }}
                    >
                      예술/디자인
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "대학교재/전문서적",

                          key: 210,
                        },
                      }}
                    >
                      대학교재/전문서적
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "컴퓨터",

                          key: 211,
                        },
                      }}
                    >
                      컴퓨터
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "프랑스도서",

                          key: 215,
                        },
                      }}
                    >
                      프랑스도서
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="sub">
                음반
                <ul className="sub_sub">
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "가요",

                          key: 301,
                        },
                      }}
                    >
                      가요
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "POP",

                          key: 302,
                        },
                      }}
                    >
                      POP
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "ROCK",

                          key: 303,
                        },
                      }}
                    >
                      ROCK
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "일본음악",

                          key: 304,
                        },
                      }}
                    >
                      일본음악
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "WORLD MUSIC",

                          key: 305,
                        },
                      }}
                    >
                      WORLD MUSIC
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "JAZZ",

                          key: 306,
                        },
                      }}
                    >
                      JAZZ
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "클래식",

                          key: 307,
                        },
                      }}
                    >
                      클래식
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "국악",

                          key: 308,
                        },
                      }}
                    >
                      국악
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "뉴에이지/명상",

                          key: 309,
                        },
                      }}
                    >
                      뉴에이지/명상
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "O.S.T",

                          key: 310,
                        },
                      }}
                    >
                      O.S.T
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "종교음악",

                          key: 311,
                        },
                      }}
                    >
                      종교음악
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "수입음반",

                          key: 313,
                        },
                      }}
                    >
                      수입음반
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/list/bestSeller",
                        state: {
                          value: "LP",

                          key: 320,
                        },
                      }}
                    >
                      LP
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </span>
        <li>
          <Link
            to={{
              pathname: "/list/newBook",
              state: {
                value: "신간도서",

                key: Header_Category[0].key,
              },
            }}
          >
            신간도서
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/list/bestSeller",
              state: {
                value: "베스트셀러",

                key: Header_Category[0].key,
              },
            }}
          >
            베스트셀러
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={{
              pathname: "/list/bestSeller",
              state: {
                value: "외국도서",

                key: Header_Category[1].key,
              },
            }}
          >
            외국도서
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={{
              pathname: "/list/bestSeller",
              state: {
                value: "음반/DVD",

                key: Header_Category[2].key,
              },
            }}
          >
            음반/DVD
          </Link>
        </li>
      </ul>
      <div className="Navbar_search">
        <form>
          <input
            type="text"
            name="Query"
            value={Query}
            onChange={onChange}
            placeholder="검색어를 입력해주세요"
          ></input>{" "}
          <Link
            to={{
              pathname: "/list/search",
              state: {
                value: Query,
              },
            }}
          >
            <input
              type="image"
              src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
            ></input>
          </Link>
        </form>
      </div>
      <div className="Navbar_loc">
        <button className="loc_btn">장소 설정</button>
      </div>
      <div className="Navbar_info">
        <button className="info_btn">개인정보</button>
      </div>
      <div className="Navbar_cart">
        <button className="cart_btn">장바구니</button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="Header">
      <UserMenu />
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
