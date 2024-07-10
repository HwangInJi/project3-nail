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
  const [activeTab, setActiveTab] = useState("찜 목록"); // 현재 활성 탭 상태

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
      <div className="mypage_top"></div>
      <main className="save_info">
        <div className="save_left">
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

        <div className="save_right">
          <div className="save01">
            <div className="list">
              <div className="main__list">
                <div className="list_item">
                  <img
                    className="list_image"
                    src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                    alt="img"
                  />
                  <div className="list_text">
                    <span className="list_title">네일플로리</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </div>
              <div className="main__list">
                <div className="list_item">
                  <img
                    className="list_image"
                    src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                    alt="img"
                  />
                  <div className="list_text">
                    <span className="list_title">네일플로리</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </div>
              <div className="main__list">
                <div className="list_item">
                  <img
                    className="list_image"
                    src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                    alt="img"
                  />
                  <div className="list_text">
                    <span className="list_title">네일플로리</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </div>
              <div className="main__list">
                <div className="list_item">
                  <img
                    className="list_image"
                    src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                    alt="img"
                  />
                  <div className="list_text">
                    <span className="list_title">네일플로리</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </div>
              <div className="main__list">
                <div className="list_item">
                  <img
                    className="list_image"
                    src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                    alt="img"
                  />
                  <div className="list_text">
                    <span className="list_title">네일플로리</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </div>
              <div className="main__list">
                <div className="list_item">
                  <img
                    className="list_image"
                    src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                    alt="img"
                  />
                  <div className="list_text">
                    <span className="list_title">네일플로리</span>
                  </div>
                  <div className="list_icon">
                    <p>리뷰 : 3개</p>
                    <p>평점 : ★★★★☆</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
