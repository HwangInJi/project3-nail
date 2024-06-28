import Image from "next/image";

export default function Search() {
  return (
    <div id="search">
      <div class="search-bar">
        <div class="search-item">
          <label for="destination">네일샵</label>
          <input type="text" id="destination" placeholder="네일샵 검색" />
        </div>
        <div class="search-item">
          <label for="checkin">지역</label>
          <input type="text" id="checkin" placeholder="지역 추가" />
        </div>
        <div class="search-item">
          <label for="checkout">세부지역</label>
          <input type="text" id="checkout" placeholder="세부지역 추가" />
        </div>
        <button type="submit" class="search-button">
          <Image src="/img/loupe.png" alt="검색" width={20} height={20} />
        </button>
      </div>
      <hr class="divider" />
    </div>
  );
}
