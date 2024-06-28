import Image from "next/image";

export default function Header() {
  return (
    <div id="header">
      <h1 class="logo">오늘네일</h1>

      <div class="right">
        <p>솔직한 네일샵 리뷰</p>
        <Image
          src="/img/earth.png"
          alt="menu"
          className="space"
          width={16}
          height={16}
        />
        <div class="my">
          <Image
            src="/img/menu.png"
            alt="menu"
            class="my_menu"
            width={20}
            height={20}
          />
          <Image
            src="/img/user.png"
            alt="user"
            class="my_user"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
