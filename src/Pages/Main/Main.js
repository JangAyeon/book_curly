import React from "react";
import Carousel from "../../Components/Layout/Carousel/Carousel";
import { Title } from "../../Components/Layout/Title/Title";
import Category from "../../Components/Layout/Category/Category";
import "./Main.scss";

import { Main_Category } from "../../Shared/CategoryId";

const Main = () => {
  return (
    <div id="main">
      <section className="BestSeller">
        <Title
          Title={"국내 베스트셀러"}
          SubTitle={"북컬리에서 가장 먼저 만나는 인기 도서"}
        />
        <Carousel params={100} />
      </section>
      <section className="BestCurly">
        <Title Title={"북컬리 추천"} />
        <Category
          CategoryArray={Main_Category}
          Show={"Carousel"}
          Type={"bestSeller"}
        />
      </section>

      <section className="BestMusic">
        <Title Title={"인기 가요 음반"} />
        <Carousel params={301} />
      </section>
    </div>
  );
};

export default Main;
