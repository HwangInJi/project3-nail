import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div id="main">
      <div className="main__menu">
        <ul>
          <li>
            <Link href={"/"}>
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
            </Link>
          </li>

          <li>
            <Link href={"/seoul"}>
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
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/busan.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>부산</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href="#">
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
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/gwangju.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>광주</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/dajeun.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>대전</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href="#">
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
            </Link>
          </li>

          <li>
            <Link href="#">
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
            </Link>
          </li>

          <li>
            <Link href="#">
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
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/gangwon.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>강원도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href="#">
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
            </Link>
          </li>

          <li>
            <Link href="#">
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
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/sangdo.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경상도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/namdo.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경상남도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/jeju.png"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>제주도</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
