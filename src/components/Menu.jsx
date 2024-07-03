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
                  src="/img/seoul.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>서울</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/busan"}>
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
            <Link href={"/incheon"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/incheon.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>인천</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/gwangju"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/gwangju.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>광주</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/dajeun"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/dajeun.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>대전</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/ulsan"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/ulsan.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>울산</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/sejong"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/sejong.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>세종</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/gyeonggido"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/gyeonggido.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경기도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/gangwon"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/gangwon.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>강원도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/Chungcheong"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/Chungcheong.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>충청도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/Jeollado"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/Jeollado.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>전라도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/gyeongsangdo"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/sangdo.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경상도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/gyeongsangnamdo"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/namdo.svg"
                  alt="컬처아이콘"
                  width={24}
                  height={24}
                />
                <span>경상남도</span>
              </span>
            </Link>
          </li>

          <li>
            <Link href={"/jeju"}>
              <span className="menu_text">
                <Image
                  className="menu_icon"
                  src="/img/jeju.svg"
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
