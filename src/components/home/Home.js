import React from "react";
import styled from "styled-components";

const Visual = styled.section`
  width: 100%;
  height: 530px;
  background-image: url("https://s.zigbang.com/v1/web/main/main_2018.png");
  margin-top: 72px;
  background-position: center;
  position: relative;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(1, 1, 1, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  padding-bottom: 15px;
  box-sizing: border-box;
`;
const SearchTop = styled.ul`
  width: 880px;
  margin: 15px auto;

  display: flex;
  a {
    padding: 10px 20px;
    text-decoration: none;
    li {
      color: #fff;
      span {
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        margin-right: 8px;
      }
      small {
        font-size: 12px;
      }
    }
  }
`;
const SearchBottom = styled.div`
  width: 880px;
  display: flex;
  margin: 0 auto;
  border: 2.5px solid #7986cb;

  input {
    font-size: 16px;
    flex: 1;
    background: white;
    border: none;
    outline: none;
  }
`;
const SearchIMG = styled.div`
  width: 50px;
  height: 50px;

  background: white;
  background-image: url("https://s.zigbang.com/v2/web/search/ic-search2x.png");
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
`;
const SearchBTN = styled.button`
  background: #7986cb;
  width: 15%;
  font-size: 18px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
`;

const FeatureContainer = styled.section`
  width: 880px;
  margin: 0 auto;
  display: flex;
  padding: 15px 0;
`;
const FeatureItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Summary = styled.div`
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 15px;
  span {
    font-weight: bold;
    font-size: 17px;
  }
  button {
    width: 50px;
    height: 18px;
    font-size: 11px;
    background: none;
    outline: none;
    border: 1px solid #a7c0cd;
    color: #a7c0cd;
  }
`;
const Remian = styled.div`
  width: 100%;
  height: 150px;
  background-image: url("https://s.zigbang.com/v1/web/main/banner_main_www.png");
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const NewsList = styled.ul`
  width: 100%;
  height: 150px;
  a {
    display: block;
    text-decoration: none;
    color: gray;
    font-size: 12px;
    margin-bottom: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Visual>
        <SearchBox>
          <SearchTop>
            <a href="/">
              <li>
                <span>아파트</span>
                <small>(매매/전월세/신축분양)</small>
              </li>
            </a>
            <a href="/">
              <li>
                <span>빌라,투룸+</span>
                <small>(매매/전월세)</small>
              </li>
            </a>
            <a href="/">
              <li>
                <span>원룸</span>
                <small>(전월세)</small>
              </li>
            </a>
            <a href="/">
              <li>
                <span>오피스텔/도시형생활주택</span>
                <small>(전월세)</small>
              </li>
            </a>
          </SearchTop>
          <SearchBottom>
            <SearchIMG />
            <input placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요" />
            <SearchBTN>찾아보기</SearchBTN>
          </SearchBottom>
        </SearchBox>
      </Visual>
      <FeatureContainer>
        <FeatureItem>
          <Summary>
            <span>소개할게요</span>
          </Summary>
          <Remian />
        </FeatureItem>
        <FeatureItem>
          <Summary>
            <span>뉴스</span>
            <button>더보기</button>
          </Summary>
          <NewsList>
            <a href="/">
              <li>직방 #살아보기 신청하기</li>
            </a>
            <a href="/">
              <li>[고궁뷰]0원집 구경하기</li>
            </a>
            <a href="/">
              <li>뜨는 동네&번화가에서 별 탈 없이 사는 법</li>
            </a>
            <a href="/">
              <li>성수동 원룸,공짜로 살아본 이야기</li>
            </a>
            <a href="/">
              <li>허위매물 잡는 직방 '허위매물 연구소'</li>
            </a>
          </NewsList>
        </FeatureItem>
        <FeatureItem>
          <Summary>
            <span>공지사항</span>
            <button>더보기</button>
          </Summary>
          <NewsList>
            <a href="/">
              <li>[공지] 직방 개인정보처리방침(2020/05/01)개정...</li>
            </a>
            <a href="/">
              <li>[공지] 직방 개인정보처리방침(2020/05/01)개정...</li>
            </a>
            <a href="/">
              <li>[공지] 직방 개인정보처리방침(2020/05/01)개정...</li>
            </a>
            <a href="/">
              <li>[공지] 직방 개인정보처리방침(2020/05/01)개정...</li>
            </a>
            <a href="/">
              <li>[공지] 직방 개인정보처리방침(2020/05/01)개정...</li>
            </a>
          </NewsList>
        </FeatureItem>
      </FeatureContainer>
    </div>
  );
}
