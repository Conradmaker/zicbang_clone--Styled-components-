import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useMainSearch, useMainSearchSet } from "../../App";

const menuPop = keyframes`
from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;
const slideUp = keyframes`
from{
    transform:translateY(-500px)
}

  to {
    transform: translateY(0px);
  }

`;
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
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 72px;
    flex-direction: column;
  }
`;
const MenuToggle = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 20px;
  position: absolute;
  top: 24px;
  right: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: none;

  &:hover {
    background: #7986cb;
    color: white;
  }
  @media (max-width: 1024px) {
    display: initial;
  }
`;
const SearchToggle = styled.a`
  width: 30px;
  height: 30px;
  background-image: url("https://s.zigbang.com/v2/web/search/ic-search2x.png");
  background-size: cover;
  position: absolute;
  top: 22px;
  right: 80px;
  cursor: pointer;
  display: none;
  @media (max-width: 1024px) {
    display: initial;
  }
`;

const Logo = styled.a`
  background-image: url("https://s.zigbang.com/v1/web/common/new/h_logo_new.png");
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 44px;
  margin: 10px;
  cursor: pointer;
`;
const LeftMenu = styled.ul`
  flex: 1;
  display: flex;
  margin-left: 10px;
  align-content: center;
  margin: 10px;
  animation: ${slideUp} 0.8s ease-in-out forwards;
  li {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:hover {
      ul {
        display: initial;
      }
      span {
        color: #7986cb;
      }
    }
    span {
      font-size: 15px;
      font-weight: bold;
    }
    small {
      margin-top: 5px;
      font-size: 10px;
      color: #7986cb;
    }
    ul {
      animation: ${menuPop} 0.5s ease-in forwards;
      padding-top: 23px;
      display: none;
      background: white;

      li {
        display: block;
        font-size: 12px;
        margin: 5px;
        &:hover {
          background: #7986cb;
          color: #fff;
          font-weight: bold;
          &::after {
            content: "(준비중)";
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    display: none;
    ${(props) =>
      props.open &&
      css`
        display: initial;
      `}
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  animation: ${slideUp} 0.5s ease-in-out forwards;
  @media (max-width: 1024px) {
    display: none;
    ${(props) =>
      props.open &&
      css`
        display: flex;
      `}
  }
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
  cursor: pointer;
  &:hover {
    background: #7986cb;
    color: white;
  }
  @media (max-width: 1024px) {
    border: none;
    display: flex;
    height: 100%;
    align-content: center;
    justify-content: center;
    font-size: 20px;
    margin: 0;
    padding: 18.5px 0;
    height: 100%;
    width: 50%;
  }
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
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 50%;
    text-align: center;
    justify-content: center;
  }
`;
export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const SearchOpen = useMainSearch();
  const SearchSet = useMainSearchSet();
  return (
    <Header>
      <Logo />
      <MenuToggle onClick={() => setOpen(!open)}>
        {open ? "CLOSE" : "OPEN"}
      </MenuToggle>
      <SearchToggle onClick={() => SearchSet(!SearchOpen)}></SearchToggle>
      <LeftMenu open={open}>
        <li>
          <span>아파트</span>
          <small>(매매/전월세/신축분양)</small>
          <ul>
            <li>매매/전.월세</li>
            <li>신축분양</li>
            <li>인구흐름</li>
            <li>우리집 내놓기</li>
          </ul>
        </li>
        <li>
          <span>빌라,투룸</span>
          <small>(매매/전월세)</small>
          <ul>
            <li>빌라,투룸 찾기</li>
            <li>찜한 매물</li>
            <li>빌라 내놓기(전월세만)</li>
          </ul>
        </li>
        <li>
          <span>원룸</span>
          <small>(전/월세)</small>
          <ul>
            <li>방찾기</li>
            <li>찜한 매물</li>
            <li>방 내놓기(전월세만)</li>
          </ul>
        </li>
        <li>
          <span>오피스텔/도시형생활주택</span>
          <small>(전/월세)</small>
          <ul>
            <li>오피스텔찾기</li>
            <li>찜한 매물</li>
            <li>오피스텔 내놓기(전월세만)</li>
          </ul>
        </li>
        <li>
          <span>창업/사무실</span>
          <small>(임대/매매)</small>
          <ul>
            <li>상가.점포</li>
            <li>사무실</li>
            <li>공유오피스</li>
            <li>찜한 매물</li>
            <li>상가/사무실 내놓기</li>
          </ul>
        </li>
      </LeftMenu>
      <RightMenu open={open}>
        <RightMenuBTN>로그인 및 회원가입</RightMenuBTN>
        <RightMenuINFO>
          중개사무고 가입
          <br /> 및 광고문의
        </RightMenuINFO>
      </RightMenu>
    </Header>
  );
}
