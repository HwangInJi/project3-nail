"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  // const [showMyPage, setShowMyPage] = useState(true);
  // const [showNailBox, setShowNailBox] = useState(true);
  const [activeButton, setActiveButton] = useState("mypage");

  const handleMyPageClick = () => {
    setShowMyPage(true);
    setActiveButton("mypage");
  };

  const handleActivitiesClick = () => {
    setShowMyPage(false);
    setActiveButton("activities");
  };

  // const handleNailClick = () => {
  //   setShowNailBox(true);
  // };

  // const handleReviewClick = () => {
  //   setShowNailBox(false);
  // };

  return (
    <>
      <Header />
      <section id="mypage">
        <div className="top-line"></div>
        <div className="mypage-container">
          <div className="mypage-menu">
            <button
              className={`mypage-btn ${
                activeButton === "mypage" ? "active" : ""
              }`}
              onClick={handleMyPageClick}
            >
              회원 정보 및 변경
            </button>
            <button
              className={`my-activities-btn ${
                activeButton === "activities" ? "active" : ""
              }`}
              onClick={handleActivitiesClick}
            >
              나의 활동
            </button>
          </div>

          <div className="mypage-section">
            <h1>회원 정보</h1>
            <div className="uesr_info">
              <div className="user_left">
                <img src="../img/01.jpeg" alt="img" />
                <button className="profile-chg">프로필 사진 변경</button>
              </div>

              <div className="user_right">
                <span className="My-Info-box">현재 닉네임</span>
                <div className="nickname">
                  <span>남윤서</span>
                </div>
              </div>
            </div>

            <div className="section-right">
              <h1>회원 정보 변경</h1>
              <div className="info-row">
                <span className="info-label">닉네임</span>
                <input
                  className="info-input"
                  type="text"
                  placeholder="변경할 닉네임을 입력해주세요."
                />
              </div>
              <div className="info-row">
                <span className="info-label">현재 비밀번호</span>
                <input
                  className="info-input"
                  type="password"
                  placeholder="현재 비밀번호를 입력해주세요."
                />
              </div>
              <div className="info-row">
                <span className="info-label">새 비밀번호</span>
                <input
                  className="info-input"
                  type="password"
                  placeholder="새 비밀번호를 입력해주세요."
                />
              </div>
              <button className="confirm-button">변경하기</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
