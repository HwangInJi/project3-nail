"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("dlswl1993@gmail.com");
  const [newEmail, setNewEmail] = useState(email);
  const [name, setName] = useState("황인지");
  const [newName, setNewName] = useState(name);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [activeTab, setActiveTab] = useState("내 정보"); // 현재 활성 탭 상태

  const handleButtonClick = () => {
    document.getElementById("imageUpload").click();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewEmail(email);
    setNewName(name);
    setPassword("");
    setNewPassword("");
  };

  const handleSaveClick = () => {
    setEmail(newEmail);
    setName(newName);
    setIsEditing(false);
    // 비밀번호 업데이트 로직 추가 가능
  };

  return (
    <>
      <Header />
      <div className="mypage_top"></div>
      <main className="mypage_info">
        <div className="mypage_left">
          <ul>
            <li>
              <Link href="/mypage" legacyBehavior>
                <a
                  className={activeTab === "내 정보" ? "active" : ""}
                  onClick={() => setActiveTab("내 정보")}
                >
                  내 정보
                </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href="/save" legacyBehavior>
                <a
                  className={activeTab === "찜 목록" ? "active" : ""}
                  onClick={() => setActiveTab("찜 목록")}
                >
                  찜 목록
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mypage_right">
          <div className="mypage01">
            <h2>내 프로필</h2>
            <div className="myprofile">
              <div className="image-container">
                <img src="/img/02.png" alt="img" className="circle-image" />
              </div>
              <div className="my_btn" onClick={handleButtonClick}>
                프로필 변경
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="imageUpload"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>

          <div className="mypage02">
            <h2>개인 정보</h2>
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">이름</span>
                {isEditing ? (
                  <div className="info-edit">
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="info-display">
                    <span>{name}</span>
                  </div>
                )}
              </div>
              <div className="info-item">
                <span className="info-label">이메일 주소</span>
                {isEditing ? (
                  <div className="info-edit">
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="info-display">
                    <span>{email}</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <>
                  <div className="info-item">
                    <span className="info-label">비밀번호</span>
                    <div className="info-edit">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-label">새 비밀번호</span>
                    <div className="info-edit">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="info-item">
                {isEditing ? (
                  <>
                    <Link href="/" legacyBehavior>
                      <button className="my_btn2" onClick={handleSaveClick}>
                        저장
                      </button>
                    </Link>
                    <button className="my_btn2" onClick={handleCancelClick}>
                      취소
                    </button>
                  </>
                ) : (
                  <button className="my_btn2" onClick={handleEditClick}>
                    수정
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
