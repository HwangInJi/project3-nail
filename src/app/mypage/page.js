import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function page() {
  return (
    <>
      <Header />
      <section id="mypage">
        <h1 className="CMI">
          <div className="top-line"></div>회원 정보 변경
        </h1>
        <h1 className="my-activities">나의 활동</h1>
        <div className="mypage-container">
          <div className="mypage-menu">
            <button className="mypage-btn">회원 정보 변경</button>
            <button className="mypage-btn">나의 활동</button>
          </div>
          <div className="mypage-section">
            <h2 className="my-title">회원 정보 변경</h2>
            <div className="section-header">
              <div className="My-Info">
                <span className="My-Info-box">닉네임</span>
                <div className="nickname">
                  <span>남윤서</span>
                </div>
              </div>
              <div className="myprofile">
                <div className="profile-img-box">
                  <img src="../../img/01.jpeg" alt="" className="profile-img" />
                </div>
                <button className="profile-chg">프로필 사진 변경</button>
              </div>
            </div>

            <div className="section-CMI">
              <div className="mypage-input-box">
                <h2 className="input-title">닉네임 변경</h2>
                <input
                  className="CMI-INP"
                  type="text"
                  placeholder="닉네임 변경"
                />
              </div>
              <div className="mypage-input-box">
                <h2 className="input-title">비밀번호 변경</h2>
                <input
                  className="CMI-INP"
                  type="password"
                  placeholder="비밀번호 변경"
                />
              </div>
              <div className="mypage-input-box">
                <h2 className="input-title">비밀번호 변경 확인</h2>
                <input
                  className="CMI-INP"
                  type="password"
                  placeholder="비밀번호 변경 확인"
                />
              </div>

              <button className="change-btn">변경하기</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
