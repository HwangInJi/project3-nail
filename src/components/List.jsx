import Link from "next/link";

export default function List() {
  return (
    <>
      <div className="list">
        <div className="main__list">
          <Link href={"/about"}>
            <div className="list_item">
              <img
                className="list_image"
                src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240321_157%2F1711010353086Glu5u_JPEG%2F2443A72D-68BC-41A8-9154-FBE99904D716.jpeg"
                alt="이미지설명"
              />
              <div className="list_text">
                <span className="list_title">
                  <em>네일마인</em>
                </span>
                <span className="list_host">평점: ★★★★☆</span>
                <span className="list_price">
                  <p>리뷰수: 0</p>
                  <p>찜한사람: 0</p>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/02.png" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">프린스의 ‘퍼플 레인’ 하우스</span>
              <span className="list_host">호스트: 웬디 멍크레사 님</span>
              <span className="list_availability">
                <em>8</em>월부터 예약 가능
              </span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/03.png" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                케빈 하트와 함께하는 <em>VIP</em>체험
              </span>
              <span className="list_host">호스트: 케빈 하트 님</span>
              <span className="list_availability">
                <em>8</em>월부터 예약 가능
              </span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/04.png" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                거실에서 펼쳐지는 도자 캣의 단독 공연
              </span>
              <span className="list_host">호스트: 도자 캣 님</span>
              <span className="list_availability">
                <em>10</em>월부터 예약 가능
              </span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/05.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                인사이드 아웃 <em>2</em> 세계에서 핵심 기억 만들기
              </span>
              <span className="list_host">호스트: Joy 님</span>
              <span className="list_availability">요청 기간 종료</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/06.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                오르세 미술관에서 올림픽대회 개막식 관람하기
              </span>
              <span className="list_host">호스트: Mathieu Lehanneur 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/07.png" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                오르세 미술관에서 맞이하는 아침
              </span>
              <span className="list_host">호스트: Mathieu Lehanneur 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/08.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                인크레더블 히어로 슈트 직접 디자인하기
              </span>
              <span className="list_host">호스트: Edna Mode 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/09.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                엑스 맨션에서 밤을 지새워 볼 기회
              </span>
              <span className="list_host">호스트: Jubilee 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/10.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                발리우드 스타 잔비 카푸르의 일상 속으로
              </span>
              <span className="list_host">호스트: Janhvi Kapoor 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/11.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                뮤지션 페이드와 함께하는 버스 투어
              </span>
              <span className="list_host">호스트: Feid 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/12.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">카비 라메와 게임 즐기기</span>
              <span className="list_host">호스트: Khaby Lame 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/13.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                둥둥 떠다니는 '업' 하우스에 머물러 보기
              </span>
              <span className="list_host">호스트: Carl Fredricksen 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>
      </div>

      <div className="prewlist">이전 경험</div>
      <div className="list">
        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/14.png" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                페라리 박물관에서 보내는 하룻밤
              </span>
              <span className="list_host">호스트: Marc Gene 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/15.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">슈렉의 늪지대 숙소</span>
              <span className="list_host">호스트: Donkey 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/16.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                켄이 호스팅하는 바비의 말리부 드림하우스
              </span>
              <span className="list_host">호스트: Ken 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/17.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">테드 래소의 단골 펍</span>
              <span className="list_host">호스트: Mae 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/18.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">세스 로건의 하우스플랜트 숙소</span>
              <span className="list_host">호스트: Seth Rogen 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/19.jpeg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">
                '나 홀로 집에'서 즐기는 달콤한 휴가
              </span>
              <span className="list_host">호스트: Buzz 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>

        <div className="main__list">
          <div className="list_item">
            <img className="list_image" src="/img/20.jpg" alt="이미지 설명" />
            <div className="list_text">
              <span className="list_title">라스트 블록버스터</span>
              <span className="list_host">호스트: Sandi 님</span>
              <span className="list_availability">예약 마감</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
