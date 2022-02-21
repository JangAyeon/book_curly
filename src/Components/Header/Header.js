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
          <li>전체 카테고리</li>
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
