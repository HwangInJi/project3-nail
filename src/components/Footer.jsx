import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="section1">
        <h3>다음 여행을 위한 추천 여행지</h3>
        <nav>
          <ul className="navList">
            <li>인기</li>
            <li>예술 및 문화</li>
            <li>야외</li>
            <li>산맥</li>
            <li>해변</li>
            <li>카테고리</li>
            <li>즐길 거리</li>
          </ul>
        </nav>
      </div>
      {/* <hr class="footer_divider" /> */}
      <div className="section2">
        <div>
          <h4>캔모어</h4>
          <p>아파트 숙소</p>
        </div>
        <div>
          <h4>베날마데나</h4>
          <p>해변 근처 독채 숙소</p>
        </div>
        <div>
          <h4>마르베야</h4>
          <p>저택 숙소</p>
        </div>
        <div>
          <h4>미하스</h4>
          <p>아파트 숙소</p>
        </div>
        <div>
          <h4>프레스콧</h4>
          <p>반려동물 동반이 허용되는 숙소</p>
        </div>
        <div>
          <h4>스카츠데일</h4>
          <p>독채 숙소</p>
        </div>
        <div>
          <h4>투손</h4>
          <p>반려동물 동반이 허용되는 숙소</p>
        </div>
        <div>
          <h4>요스퍼</h4>
          <p>통나무집 숙소</p>
        </div>
        <div>
          <h4>마운틴뷰</h4>
          <p>통나무집 숙소</p>
        </div>
        <div>
          <h4>Devonport</h4>
          <p>별장 숙소</p>
        </div>
        <div>
          <h4>Mallacoota</h4>
          <p>휴가지 숙소</p>
        </div>
        <div>
          <h4>이비자</h4>
          <p>휴가지 숙소</p>
        </div>
        <div>
          <h4>애나하임</h4>
          <p>아파트 숙소</p>
        </div>
        <div>
          <h4>몬터레이</h4>
          <p>독채 숙소</p>
        </div>
        <div>
          <h4>파소 로블레스</h4>
          <p>독채 숙소</p>
        </div>
        <div>
          <h4>산타바바라</h4>
          <p>해변 바로 앞 숙소</p>
        </div>
        <div>
          <h4>소노마</h4>
          <p>반려동물 동반이 허용되는 숙소</p>
        </div>
        <div>
          <h4>더 보기</h4>
        </div>
      </div>
      <hr class="footer_divider" />
      <div className="section3">
        <div>
          <ul>
            <li>에어비앤비 지원</li>
            <li>도움말 센터</li>
            <li>에어커버</li>
            <li>차별 반대</li>
            <li>장애인 지원</li>
            <li>예약 취소 옵션</li>
            <li>이웃 민원 신고</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>호스팅</li>
            <li>당신의 공간을 에어비앤비해보세요</li>
            <li>호스트를 위한 에어커버</li>
            <li>호스팅 자료</li>
            <li>커뮤니티 포럼</li>
            <li>책임감 있는 호스팅</li>
            <li>무료 호스팅 클래스 참여하기</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>에어비앤비</li>
            <li>뉴스룸</li>
            <li>새로운 기능</li>
            <li>채용정보</li>
            <li>투자자 정보</li>
            <li>Airbnb 긴급 숙소</li>
          </ul>
        </div>
      </div>
      {/* <hr class="footer_divider" /> */}
      <div className="section4">
        <p>
          © 2024 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 · 사이트맵 · 한국의
          변경된 환불 정책 · 회사 세부정보
        </p>
        <div className="social">
          <Image
            src="/img/facebook.png"
            alt="Facebook"
            width={20}
            height={20}
          />
          <Image src="/img/twitter.png" alt="Twitter" width={20} height={20} />
          <Image
            src="/img/instagram.png"
            alt="Instagram"
            width={20}
            height={20}
          />
          <Image src="/img/github.png" alt="github" width={20} height={20} />
        </div>
      </div>
      {/* <hr class="footer_divider" /> */}
      <div className="detail_text">
        <p>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </p>
      </div>
    </footer>
  );
}
