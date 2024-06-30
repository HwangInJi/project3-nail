import React from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function about() {
  return (
    <>
      <Header />
      <Search />
      <main className="detail_main">
        <div className="detail_top">
          <h1>엑스 맨션에서 훈련하기</h1>
          <div className="save">
            <p>저장하기</p>
            <img src="/img/heart.png" alt="저장하기" />
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item-large">
            <img src="/img/01.jpeg" alt="이미지사진1" />
          </div>
          <div className="gallery">
            <div className="gallery-item">
              <img src="/img/02.png" alt="이미지사진2" />
            </div>
            <div className="gallery-item">
              <img src="/img/03.png" alt="이미지사진3" />
            </div>
            <div className="gallery-item">
              <img src="/img/04.png" alt="이미지사진4" />
            </div>
            <div className="gallery-item">
              <img src="/img/05.jpeg" alt="이미지사진5" />
            </div>
          </div>
        </div>

        <div className="left">
          <div className="detail_title">
            <h2>
              애비퀴우, 뉴멕시코, 미국
            </h2>
            <p>
              최대 인원 4명침실 1개침대 2개욕실 1개
            </p>
          </div>

          <div className="detail_info">
            <div className="profile1">
              <img src="/img/profile.jpeg" alt="프로필이미지" />
            </div>
            <div className="profile2">
              <h3>
                <em> 호스트: Carl Fredricksen 님</em>
              </h3>
              <p>
                은퇴한 풍선 판매원
              </p>
            </div>
          </div>

          <div className="details">
            <div className="detail_info2">
              <div className="info2_icon">
                <img src="/img/room.jpg" alt="프로필이미지" />
              </div>
              <div className="info2">
                <h3>
                  수많은 풍선이 달린 저희 집에서 숙박해 보세요
                </h3>
                <p>
                  그거 아세요? 무려 8,000개가 넘는 풍선이 저희 집 지붕 위에 매달려 있답니다!
                </p>
              </div>
            </div>

            <div className="detail_info2">
              <div className="info2_icon">
                <img src="/img/park.jpg" alt="프로필이미지" />
              </div>
              <div className="info2">
                <h3>
                  야생으로 떠나는 모험
                </h3>
                <p>
                  야생으로 떠나 탐험가 배지를 획득하세요. 이제 저는 쉴 때가 된 것 같아요.
                </p>
              </div>
            </div>

            <div className="detail_info2">
              <div className="info2_icon">
                <img src="/img/park.jpg" alt="프로필이미지" />
              </div>
              <div className="info2">
                <h3>
                  야생으로 떠나는 모험
                </h3>
                <p>
                  엘리의 고글을 구경하고 모험 일지와 러브레터를 읽어보세요.
                </p>
              </div>
            </div>

            <div className="detail_info2">
              <div className="info2_icon">
                <img src="/img/park.jpg" alt="프로필이미지" />
              </div>
              <div className="info2">
                <h3>
                  하늘을 올려다보는 것도 잊지 마세요
                </h3>
                <p>
                  모험에서 돌아오면 집이 하늘에 둥둥 떠다니는 풍경이 여러분을 맞이할 거예요.
                </p>
              </div>
            </div>
          </div>

          <div className="info_text">
            <p>
              항상 방문객을 반기지는 않아요. 하지만 더그와 저만 남고 보니 누군가 방문하는 것도 꽤 좋을 거란 생각을 하게 되었습니다. 그래서 여러분을 저희집에 초대합니다. 제 아내 엘리와 함께 손수 꾸민 곳이죠. 이곳은 제 인생 최고의 모험을 경험한 곳이예요. 인생 최고의 모험은 언제나 사랑하는 이와 함께하는 시간이라는 것을 배우게 된 곳이기도 하지요. 친구들과 함께 이곳에 머무르면서 나만의 모험 연대기를 시작해 보세요. 떠나기 전 풍선집이 하늘 높이 날아가는 진풍경도 구경하실 수 있답니다.
            </p>
          </div>

          <div className="info_place">
            <h2>숙박장소</h2>
            <div className="place">
              <section>
                <img src="/img/place1.jpeg" alt="장소" />
                <h3>침실</h3>
                <p>더블 침대 1개</p>
              </section>
              <section>
                <img src="/img/place2.jpeg" alt="장소" />
                <h3>거실</h3>
                <p>퀸사이즈 침대 1개</p>
              </section>
            </div>
          </div>
        </div>

        <div className="right">

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
