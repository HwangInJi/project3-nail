"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Page() {

  return (
    <>
      <Header />
      <section id="mypage">
        <div className="top-line"></div>
        <div className="mypage-container">
          <div className="side__menu">
            <ul className="side__title">
              <Link href={"/mypage"} className="active">회원 정보 변경</Link>
              <Link href={"/mypage"} className="active">나의 활동</Link>
            </ul>
          </div>

          <div className="mypage_contents_wrap">
            <div className="mypage_profile">
              <form action="./util/siginSave.php" name="siginSave" method="post">
                <h2>내 정보</h2>
                <div>
                  <label htmlFor="phoneNum">전화번호</label>
                  <input type="text" className="input_style" />
                </div>
                <div className="slide_pass">
                  <label htmlFor="correctPassword">현재 비밀번호</label>
                  <div className="input-container">
                    <input type="password" className="input_style" />
                    <i className="fas fa-eye-slash toggle-icon"></i>
                  </div>
                </div>
                <div className="slide_pass">
                  <label htmlFor="newPassword">신규 비밀번호</label>
                  <div className="input-container">
                    <input type="password" className="input_style" />
                    <i className="fas fa-eye-slash toggle-icon"></i>
                  </div>
                </div>
                <div className="slide_pass">
                  <label htmlFor="newPasswordCheck">신규 비밀번호 확인</label>
                  <div className="input-container">
                    <input type="password" className="input_style" />
                    <i className="fas fa-eye-slash toggle-icon"></i>
                  </div>
                </div>
                <div className="btn">
                  <button type="submit">변경하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
