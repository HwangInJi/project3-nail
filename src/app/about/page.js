import React from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <Search />
      <main className="detail_main">
        <div className="detail_top">
          <h1>네일마인</h1>
          <div className="save">
            <p>저장하기</p>
            <img src="/img/heart.png" alt="저장하기" />
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item-large">
            <img
              src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_157%2F1711010353086Glu5u_JPEG%2F2443A72D-68BC-41A8-9154-FBE99904D716.jpeg"
              alt="이미지사진1"
            />
          </div>
          <div className="gallery">
            <div className="gallery-item">
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_91%2F1711010325992gcKsr_JPEG%2F440D11FA-28FF-46FD-B45F-456D380AEFEC.jpeg"
                alt="이미지사진2"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_297%2F1711010299049LhT4X_JPEG%2FD4ABECF2-A43C-4F0A-8807-30E6023DC68A.jpeg"
                alt="이미지사진3"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_98%2F1711010284783lNaYn_JPEG%2F4EE2B301-CC71-44EC-9D0D-6BD89774A23C.jpeg"
                alt="이미지사진4"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_288%2F1711010262471dIRiP_JPEG%2FF2434953-B21C-476C-9BA6-FB3843DAD632.jpeg"
                alt="이미지사진5"
              />
            </div>
          </div>
        </div>

        <div className="detail_mid">
          <div className="detail_left">
            <div className="detail_title">
              <img src="/img/location.png" alt="프로필이미지" />
              <p>부산 남구 분포로 145 스퀘어동 1층 1132호</p>
            </div>

            <div className="detail_info">
              <h2>운영시간</h2>
              <div className="profile2">
                <p>화: 11:00 - 20:30</p>
                <p>수: 11:00 - 20:30</p>
                <p>목: 11:00 - 20:30</p>
                <p>금: 11:00 - 20:30</p>
                <p>토: 11:00 - 20:30</p>
                <p>일: 11:00 - 20:30</p>
                <p>월: 11:00 - 20:30</p>
              </div>
            </div>

            <div className="details">
              <h2>편의시설 및 서비스</h2>
              <div className="detail_info2">
                <div className="info2_icon">
                  <img src="/img/check.png" alt="프로필이미지" />
                </div>
                <div className="info2">
                  <h3>속눈썹 연장</h3>
                </div>
              </div>

              <div className="detail_info2">
                <div className="info2_icon">
                  <img src="/img/check.png" alt="프로필이미지" />
                </div>
                <div className="info2">
                  <h3>왁싱</h3>
                </div>
              </div>

              <div className="detail_info2">
                <div className="info2_icon">
                  <img src="/img/check.png" alt="프로필이미지" />
                </div>
                <div className="info2">
                  <h3>반려동물 동반</h3>
                </div>
              </div>
            </div>

            <div className="info_text">
              <h3>소개</h3>
              <p>
                손,발톱 전문샵, 케어 맛집 네일마인, 1:1 맞춤 서비스 네일
                마인입니다
                <br />
                <br />
                손님들에게 서비스를 베풀고 소통을 하는 네일마인이 되겠습니다.
                <br />
                <br />
                _1:1 디자인 상담,꼼꼼한 시술
                <br />
                _젤네일, 젤패디, 발각질, 속눈썹, 왁싱, 생장술
                <br />
                _문제성 손발톱 교정 가능
                <br />
                _2인 동시 시술 가능
                <br />
                _정품 스와로브스키 사용
                <br />
                _주차시설 완벽
                <br />
                _반려동물 동반 가능
              </p>
            </div>

            <div className="info_place">
              <h2>기본가격</h2>
              <div className="place">
                <section>
                  <h3>손 젤</h3>
                  <p>케어+원컬러</p>
                  <span>
                    <em>42,000원</em>
                  </span>
                </section>
              </div>
              <div className="place">
                <section>
                  <h3>발 젤</h3>
                  <p>케어+원컬러</p>
                  <span>
                    <em>50,000원</em>
                  </span>
                </section>
              </div>
              <div className="place">
                <section>
                  <h3>손 울트라</h3>
                  <p>기본케어+영양제</p>
                  <span>
                    <em>17,000원</em>
                  </span>
                </section>
              </div>
              <div className="place">
                <section>
                  <h3>왁싱</h3>
                  <p>비키니-올누드</p>
                  <span>
                    <em>80,000원</em>
                  </span>
                </section>
                <section>
                  <h3>왁싱</h3>
                  <p>비키니-비키니라인</p>
                  <span>
                    <em>50,000원</em>
                  </span>
                </section>
                <section>
                  <h3>왁싱</h3>
                  <p>바디-겨드랑이</p>
                  <span>
                    <em>20,000원</em>
                  </span>
                </section>
              </div>
              <div className="place">
                <section>
                  <h3>기타</h3>
                  <p>발 각질 (여자)</p>
                  <span>
                    <em>40,000원</em>
                  </span>
                </section>
                <section>
                  <h3>기타</h3>
                  <p>발 각질 (남자)</p>
                  <span>
                    <em>50,000원</em>
                  </span>
                </section>
              </div>
            </div>
          </div>

          <div className="detail_right">
            <div className="review-section">
              <div className="review">
                <img src="/img/profile.jpeg" alt="프로필 사진" />
                <div className="review_info">
                  <p className="stars">★★★★☆</p>
                  <p className="username">또흔</p>
                  <p className="age-gender">31세/경기도 안산시</p>
                  <p className="content">
                    저는 아이라이너와 마스카라가 굉장히 잘 번지는 눈을 갖고
                    있어서 언더에 아이라이너를 칠한다던지 언더래쉬에 마스카라를
                    바른다는 건 정말 상상하지도 못할 일이라고 생각하고 키스미
                    브라운 마스카라도 번지는 눈을 갖고 있습니다. 마스카라 새로
                    사려고 알아보다가 제가 좋아하는 유튜브어쩌고 저쩌고
                  </p>
                </div>
              </div>
            </div>

            <div className="review-section">
              <div className="review">
                <img src="/img/profile.jpeg" alt="프로필 사진" />
                <div className="review_info">
                  <p className="stars">★★★☆☆</p>
                  <p className="username">또흔</p>
                  <p className="age-gender">31세/서울시 남양주</p>
                  <p className="content">
                    저는 아이라이너와 마스카라가 굉장히 잘 번지는 눈을 갖고
                    있어서 언더에 아이라이너를 칠한다던지 언더래쉬에 마스카라를
                    바른다는 건 정말 상상하지도 못할 일이라고 생각하고 키스미
                    브라운 마스카라도 번지는 눈을 갖고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="review-section">
              <div className="review">
                <img src="/img/profile.jpeg" alt="프로필 사진" />
                <div className="review_info">
                  <p className="stars">★★☆☆☆</p>
                  <p className="username">또흔</p>
                  <p className="age-gender">31세/서울시 남양주</p>
                  <p className="content">
                    저는 아이라이너와 마스카라가 굉장히 잘 번지는 눈을 갖고
                    있어서 언더에 아이라이너를 칠한다던지 언더래쉬에 마스카라를
                    바른다는 건 정말 상상하지도 못할 일이라고 생각하고 키스미
                    브라운 마스카라도 번지는 눈을 갖고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="review-section">
              <div className="review">
                <img src="/img/profile.jpeg" alt="프로필 사진" />
                <div className="review_info">
                  <p className="stars">★★★★★</p>
                  <p className="username">또흔</p>
                  <p className="age-gender">31세/서울시 남양주</p>
                  <p className="content">
                    저는 아이라이너와 마스카라가 굉장히 잘 번지는 눈을 갖고
                    있어서 언더에 아이라이너를 칠한다던지 언더래쉬에 마스카라를
                    바른다는 건 정말 상상하지도 못할 일이라고 생각하고 키스미
                    브라운 마스카라도 번지는 눈을 갖고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="review-section">
              <div className="review">
                <img src="/img/profile.jpeg" alt="프로필 사진" />
                <div className="review_info">
                  <p className="stars">★★★★★</p>
                  <p className="username">또흔</p>
                  <p className="age-gender">31세/서울시 남양주</p>
                  <p className="content">
                    저는 아이라이너와 마스카라가 굉장히 잘 번지는 눈을 갖고
                    있어서 언더에 아이라이너를 칠한다던지 언더래쉬에 마스카라를
                    바른다는 건 정말 상상하지도 못할 일이라고 생각하고 키스미
                    브라운 마스카라도 번지는 눈을 갖고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <button type="submit" className="review-button">
              리뷰 작성
            </button>
          </div>
        </div>

        <div className="map">
          <h2>숙소 위치</h2>
          <img src="/img/map.jpg" alt="위치 지도" />
        </div>
      </main>
      <Footer />
    </>
  );
}
