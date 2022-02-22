import React, { useState, useEffect } from "react";

import axios from "axios";

const fake_data = {
  title: "인터파크도서검색결과",
  link: "http://bsearch.interpark.com/dsearch/book.jsp?query=9788992717199&sch=book&order_tp=accuracy&contextCheckboxUseYn=N&filter_disp_no=028&titleCheckboxUseYn=N&personCheckboxUseYn=N&entrNmCheckboxUseYn=N",
  language: "ko",
  copyright: "Copyright ⓒ 2009 INTERPARK INT All rights reserved.",
  pubDate: "22 Feb 2022 14:19:50 GMT",
  imageUrl: "http://bimage.interpark.com/renewPark/topGnb/logo.jpg",
  totalResults: 1,
  startIndex: 1,
  itemsPerPage: 1,
  maxResults: 10,
  queryType: "isbn",
  query: "9788992717199",
  searchCategoryId: "100",
  searchCategoryName: "국내도서",
  returnCode: "000",
  returnMessage: "정상",
  item: [
    {
      itemId: 203605542,
      title: "생각의 함정",
      description:
        "실책은 우리의 사고방식이 잘못되어 있다기보다 경직되었기 때문에 발생한다. 이러한 실책을 이끄는 사고의 틀인 &#39인지함정&#39을 다루는 이 책은, 인지함정의 유형별 원인과 그에 따른 사고의 과정을 과거의 역사와 현대의 역사 양 측면에서 살펴보고 있다. 우리 모두에게 내재된 파괴적인 심리적 패턴을 식별하고 그것을 어떻게 극복할 수 있을 것인지 심리학 뿐 아니라 경제학과 역사학을 넘나들며 인간의 인식을 통찰한다.",
      pubDate: "20090915",
      priceStandard: 13800,
      priceSales: 12420,
      discountRate: "10",
      saleStatus: "품절",
      mileage: "690",
      mileageRate: "6",
      coverSmallUrl:
        "http://bimage.interpark.com/goods_image/5/5/4/2/203605542h.jpg",
      coverLargeUrl:
        "http://bimage.interpark.com/goods_image/5/5/4/2/203605542s.jpg",
      categoryName: "",
      publisher: "에코의서재",
      customerReviewRank: 9.4,
      author: "",
      translator: "",
      isbn: "9788992717199",
      link: "http://book.interpark.com/blog/integration/product/itemDetail.rdo?prdNo=203605542&refererType=8303&bookblockname=bpmain_in&booklinkname=wg_search_89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A",
      mobileLink:
        "http://m.book.interpark.com/view.html?PRD_NO=203605542&SHOP_NO=0000400000",
      additionalLink:
        "http://book.interpark.com/gate/ippgw.jsp?goods_no=203605542&biz_cd=",
      reviewCount: 15,
    },
  ],
};

function GetDetail(props) {
  const { isbn } = props.match.params;
  console.log(isbn);
  const [IsbnData, setIsbnData] = useState(null);

  useEffect(() => {
    async function getIsbnData() {
      try {
        //응답 성공
        //https://book.interpark.com/api/search.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&query=9788992717199&queryType=isbn
        const response = await axios.get(
          `https://book.interpark.com/api/search.api?key=89A91C143CDE9705B057F05F9A1F5B538CD290A7AD80599201DCE4401BEEFE8A&output=json&queryType=isbn&query=${isbn}`
        );
        console.log("ISBN Detail DATA : ", response.data.item[0]);
        setIsbnData(response.data.item[0]);
      } catch (error) {
        //응답 실패
        console.log("Carousel Error : ", error);
      }
    }
    getIsbnData();
  }, [isbn]);

  console.log(IsbnData.link);

  return (
    <>
      {IsbnData && (
        <Detail
          Title={IsbnData.title}
          Img={IsbnData.coverLargeUrl}
          Author={IsbnData.author}
          Publisher={IsbnData.publisher}
          PubDate={IsbnData.pubDate}
          ReviewRank={IsbnData.customerReviewRank}
          ReviewCount={IsbnData.reviewCount}
          priceSales={IsbnData.priceSales}
          discountRate={IsbnData.discountRate}
          priceStandard={IsbnData.priceStandard}
          description={IsbnData.description}
          AdditionalLimk={IsbnData.link}
        ></Detail>
      )}
    </>
  );
}

const Detail = () => {
  return <div>Detail</div>;
};

export default GetDetail;
