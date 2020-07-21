import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-content: center;
  background: #fff;
  z-index: 10;
`;
const Logo = styled.a`
  background-image: url("https://s.zigbang.com/v1/web/common/new/h_logo_new.png");
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 44px;
  margin: 10px;
`;
const LeftMenu = styled.ul`
  flex: 1;
  display: flex;
  margin-left: 10px;
  align-content: center;
  margin: 10px;
  li {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 15px;
      font-weight: bold;
    }
    small {
      margin-top: 5px;
      font-size: 10px;
      color: #7986cb;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;
const RightMenuBTN = styled.button`
  width: 100px;
  height: 20px;
  box-sizing: border-box;
  border: 1px solid #7986cb;
  font-size: 10px;
  margin-right: 10px;
  color: #7986cb;
  background: #fff;
`;
const RightMenuINFO = styled.div`
  display: flex;
  text-align: end;
  align-items: center;
  flex-direction: row-reverse;
  width: 140px;
  height: 100%;
  background: #49599a;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  line-height: 1.6;
  vertical-align: baseline;
  font-size: 14px;
  font-weight: bold;
`;
export default function MainHeader() {
  return (
    <Header>
      <Logo />
      <LeftMenu>
        <li>
          <span>아파트</span>
          <small>(매매/전월세/신축분양)</small>
        </li>
        <li>
          <span>빌라,투룸</span>
          <small>(매매/전월세)</small>
        </li>

        <li>
          <span>원룸</span>
          <small>(전/월세)</small>
        </li>
        <li>
          <span>오피스텔/도시형생활주택</span>
          <small>(전/월세)</small>
        </li>
        <li>
          <span>창업/사무실</span>
          <small>(임대/매매)</small>
        </li>
      </LeftMenu>
      <RightMenu>
        <RightMenuBTN>로그인 및 회원가입</RightMenuBTN>
        <RightMenuINFO>
          중개사무고 가입
          <br /> 및 광고문의
        </RightMenuINFO>
      </RightMenu>
    </Header>
  );
}
