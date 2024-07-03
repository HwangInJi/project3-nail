import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div id="header">
      <Link href={"/"}>
        <h1 className="logo">오늘네일</h1>
      </Link>

      <div className="right">
        <p>솔직한 네일샵 리뷰</p>
        <div className="my">
          <Image
            src="/img/menu.png"
            alt="menu"
            className="my_menu"
            width={20}
            height={20}
          />
          <Image
            src="/img/user.png"
            alt="user"
            className="my_user"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
