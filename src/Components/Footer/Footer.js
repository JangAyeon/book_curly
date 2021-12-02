import React, { Component } from "react";
import "./Footer.scss";
import FooterInfoData from './FooterInfoData';


class Footer extends Component{

    render (){

        return (

            <div id="footer">
                <div className="inner_footer">
                    <div className="footer_cc"> {/*right : customer counter*/}
                        <h2 className="title_cc">고객행복센터 </h2>
                        <div className="cc_view cc_call">
                            <h3><span className="tit">1644-1107</span></h3>
                            <dl className="list">
                                <dt>365고객센터</dt>
                                <dd>오전7시 - 오후 7시</dd>
                            </dl>
                        </div>
                        <div className="cc_view cc_kakao">
                        <h3><a className="tit">카카오톡 문의</a></h3>
                            <dl className="list">
                                <dt>365고객센터</dt>
                                <dd>오전7시 - 오후7시</dd>
                            </dl>
                        </div>
                        <div className="cc_view cc_qna">
                        <h3><a className="tit">1:1 문의</a></h3>
                            <dl className="list">
                                <dt>24시간 접수 가능</dt>
                                <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
                            </dl>
                        </div>
                        <div className="cc_view cc_bulkorder">
                        <h3><a className="tit">대량주문 문의</a></h3>
                            <p className="list">비회원의 경우 메일로 문의 바랍니다.</p> {/*설명 요소 아님으로 단순 p태그 사용*/}
                        </div>

                    </div>
                    <div className="company"> {/*left : about company*/}
                        <ul className="list">
                            <li><a className="link">컬리 소개</a></li>
                            <li><a className="link">컬리소개영상</a></li>
                            <li><a className="link">인재채용</a></li>
                            <li><a className="link">이용약관</a></li>
                            <li><a className="link">개인정보처리방침</a></li>
                            <li><a className="link">이용안내</a></li>
                        </ul>
                        {/*회사 소개 mapping 함수 이용??*/}
                        <div className="company_info">
                            {FooterInfoData.map(info=>{
                                return (
                                    <div className="info_list">
                                        <span className="info_txt">{info.txt}</span>
                                        <span className="info_link">{info.link}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <em>© KURLY CORP. ALL RIGHTS RESERVED</em>
                        <ul className="sns_list"></ul> {/*회사 sns mapping 함수 이용??*/}
                    </div>
                </div>
                <div className="footer_link">
                    <div className="authentication">
                        <a className="mark">
                            <img className="logo" src="https://res.kurly.com/pc/ico/2001/logo_isms.png" alt="isms 로고"></img>
                            <ul className="txt">
                                <li>[인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영</li>
                                <li>[유효기간] 2019.04.01 ~ 2022.03.31</li>
                            </ul>
                        </a>
                        <a className="mark">
                            <img className="logo" src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png" alt="eprivacy plus 로고"></img>
                            <ul className="txt">
                                <li>개인정보보호 우수 웹사이트 ·</li>
                                <li>개인정보처리시스템 인증 (ePRIVACY PLUS)</li>
                            </ul>
                        </a>
                        <a className="mark">
                            <img className="logo" src="https://res.kurly.com/pc/service/main/2009/logo_payments.png" alt="payments 로고"></img>
                            <ul className="txt">
                                <li>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한</li>
                                <li>토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;