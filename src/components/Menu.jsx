import Image from "next/image";

export default function Menu() {
  return (
    <div id="main">
      <div className="main__menu">
        <ul>
          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/korea.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>전체</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/swimming.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>서울</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/busan.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>부산</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/junmang.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>인천</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/dom.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>광주</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/ski.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>대전</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/beach.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>울산</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/korea.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>세종</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/space.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경기도</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/cacle.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>강원도</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/park.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>충청도</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/room.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>전라도</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/kids.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경상도</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/design.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경상남도</span>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/tong.jpg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>제주도</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
