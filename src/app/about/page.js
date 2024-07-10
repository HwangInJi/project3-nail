"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import FilledStar from "@/components/FilledStar";
import Star from "@/components/Star";

async function fetchShopData(shop_id) {
  const res = await fetch(`/api/shop/${shop_id}`);
  if (!res.ok) {
    throw new Error(`Error fetching shop data: ${res.statusText}`);
  }
  return res.json();
}

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ searchParams }) {
  const { shop_id } = searchParams;
  const [shop, setShop] = useState(null);
  const [error, setError] = useState(null);
  const detailLeftRef = useRef(null);
  const detailRightRef = useRef(null);

  useEffect(() => {
    async function getShopData() {
      try {
        const data = await fetchShopData(shop_id);
        setShop(data);
      } catch (err) {
        setError(err.message);
      }
    }

    if (shop_id) {
      getShopData();
    }
  }, [shop_id]);

  useEffect(() => {
    if (shop) {
      const midElement = document.querySelector(".detail_mid");
      const leftElement = detailLeftRef.current;
      const rightElement = detailRightRef.current;

      if (midElement && leftElement && rightElement) {
        const bottomMargin =
          5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

        gsap.to(rightElement, {
          y: () =>
            midElement.offsetHeight - rightElement.offsetHeight - bottomMargin,
          ease: "none",
          scrollTrigger: {
            trigger: midElement,
            start: "top top",
            end: () =>
              `+=${
                midElement.offsetHeight -
                rightElement.offsetHeight -
                bottomMargin
              }`,
            scrub: true,
            pin: false,
          },
        });
      }
    }
  }, [shop]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!shop) {
    return <div>Loading...</div>;
  }

  const icons = [
    { src: "/icon/dog.png", label: "반려동물 동반" },
    { src: "/icon/wifi.png", label: "무선 인터넷" },
    { src: "/icon/booking.png", label: "예약" },
    { src: "/icon/toilet.png", label: "남/녀 화장실 구분" },
    { src: "/icon/disabled.png", label: "장애인 주차구역" },
    { src: "/icon/disabled.png", label: "출입구 휠체어 이용가능" },
    { src: "/icon/disabled.png", label: "좌석 휠체어 이용가능" },
    { src: "/icon/disabled.png", label: "장애인 휠체어 이용가능" },
    { src: "/icon/armchair.png", label: "대기공간" },
    { src: "/icon/cosmetics.png", label: "메이크업" },
    { src: "/icon/people.png", label: "단체 이용 가능" },
    { src: "/icon/eyelashes.png", label: "속눈썹 연장" },
    { src: "/icon/massage.png", label: "왁싱" },
    { src: "/icon/moon.png", label: "심야영업" },
    { src: "/icon/bag.png", label: "포장" },
  ];

  return (
    <>
      <hr className="about_divider" />
      <main className="detail_main">
        <div className="detail_top">
          <h1>{shop.title || "값이 없습니다"}</h1>
          <div className="save">
            <button>
              <FaLink />
              공유하기
            </button>
            <button>
              <IoMdHeartEmpty />
              저장하기
            </button>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item-large">
            <img
              src={
                shop.image_urls && shop.image_urls[0]
                  ? shop.image_urls[0]
                  : "/img/default-image.jpg"
              }
              alt="이미지사진1"
            />
          </div>
          <div className="gallery">
            {shop.image_urls && shop.image_urls.length > 1 ? (
              shop.image_urls.slice(1).map((url, index) => (
                <div key={index} className="gallery-item">
                  <img src={url} alt={`이미지사진${index + 2}`} />
                </div>
              ))
            ) : (
              <p>이미지가 없습니다</p>
            )}
          </div>
        </div>

        <div className="detail_mid">
          <div className="detail_left" ref={detailLeftRef}>
            <div className="detail_info">
              <h2>운영시간</h2>
              <div className="profile2">
                {shop.operating_hours ? (
                  Object.entries(shop.operating_hours).map(([day, hours]) => (
                    <p key={day}>
                      {day}: {hours}
                    </p>
                  ))
                ) : (
                  <p>운영시간 정보가 없습니다</p>
                )}
              </div>
            </div>
            <div className="details">
              <h2>편의시설 및 서비스</h2>
              {shop.facilities && shop.facilities.length > 0 ? (
                <div className="facilities-grid">
                  {shop.facilities.map((facility, index) => {
                    const icon = icons.find((icon) => icon.label === facility);
                    return (
                      <div key={index} className="detail_info2">
                        <div className="info2_icon">
                          {icon ? (
                            <img src={icon.src} alt={facility} />
                          ) : (
                            <img src="/icon/check.png" alt="기본 아이콘" />
                          )}
                        </div>
                        <div className="info2">
                          <h3>{facility}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p>편의시설 정보가 없습니다</p>
              )}
            </div>
            <div className="info_text">
              <h2>소개</h2>
              <pre>{shop.introduction || "소개 정보가 없습니다"}</pre>
            </div>
          </div>

          <div className="detail_wrap">
            <div className="detail_right" ref={detailRightRef}>
              <div className="info_place">
                <h2>기본가격</h2>
                {shop.price_info ? (
                  Object.entries(shop.price_info).map(([category, items]) => (
                    <div key={category} className="place">
                      <section>
                        <h3>{category}</h3>
                        {items.map((item, index) => (
                          <div key={index}>
                            <p>{item.name}</p>
                            <span>
                              <em>{item.price}₩</em>
                            </span>
                          </div>
                        ))}
                      </section>
                    </div>
                  ))
                ) : (
                  <p>가격 정보가 없습니다</p>
                )}
                <Link href="/write" className="review-button">
                  리뷰 작성
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          <h2>네일샵 위치</h2>
          <img src="/img/map.jpg" alt="위치 지도" />
          <div className="detail_title">
            <img src="/img/franchise.png" alt="img" />
            <p>{shop.addresses || "주소가 없습니다"}</p>
          </div>
        </div>

        <div className="review_view">
          <h2>이용 후기</h2>
          <div className="comment_all">
            <div className="comment">
              <div className="comment_header">
                <img
                  src="/img/03.png"
                  alt="프로필 이미지"
                  className="profile-image"
                />
                <div className="comment_info">
                  <div className="comment_nick">주인장</div>
                  <div className="comment_rating">
                    <div className="stars">
                      {[...Array(3)].map((_, i) => (
                        <FilledStar
                          key={`filled-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={24}
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="comment_text">
                스튜디오는 모든 관광지와 매우 가깝고, 두바이 몰과 부르즈
                칼리파에서 도보로 20분 거리에 있습니다. 발코니에서 바라보는
                풍경은 감격적입니다! 추천합니다. 스튜디오는 모든 관광지와 매우
                가깝고, 두바이 몰과 부르즈 칼리파에서 도보로 20분 거리에
                있습니다. 발코니에서 바라보는 풍경은 감격적입니다! 추천합니다.
                스튜디오는 모든 관광지와 매우 가깝고, 두바이 몰과 부르즈
                칼리파에서 도보로 20분 거리에 있습니다. 발코니에서 바라보는
                풍경은 감격적입니다! 추천합니다.
              </p>
            </div>

            <div className="comment">
              <div className="comment_header">
                <img
                  src="https://a0.muscache.com/im/pictures/user/9c0ede59-7a4e-459c-89fa-c746141fbd9c.jpg?im_w=240"
                  alt="프로필 이미지"
                  className="profile-image"
                />
                <div className="comment_info">
                  <div className="comment_nick">짱아지</div>
                  <div className="comment_rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="comment_text">
                모든 것이 훌륭합니다. 이미 추천했습니다. 👌🏼
              </p>
            </div>

            <div className="comment">
              <div className="comment_header">
                <img
                  src="/img/03.png"
                  alt="프로필 이미지"
                  className="profile-image"
                />
                <div className="comment_info">
                  <div className="comment_nick">주인장</div>
                  <div className="comment_rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="comment_text">
                스튜디오는 모든 관광지와 매우 가깝고, 두바이 몰과 부르즈
                칼리파에서 도보로 20분 거리에 있습니다. 발코니에서 바라보는
                풍경은 감격적입니다! 추천합니다. 스튜디오는 모든 관광지와 매우
                가깝고, 두바이 몰과 부르즈 칼리파에서 도보로 20분 거리에
                있습니다. 발코니에서 바라보는 풍경은 감격적입니다! 추천합니다.
                스튜디오는 모든 관광지와 매우 가깝고, 두바이 몰과 부르즈
                칼리파에서 도보로 20분 거리에 있습니다. 발코니에서 바라보는
                풍경은 감격적입니다! 추천합니다.
              </p>
            </div>

            <div className="comment">
              <div className="comment_header">
                <img
                  src="https://a0.muscache.com/im/pictures/user/9c0ede59-7a4e-459c-89fa-c746141fbd9c.jpg?im_w=240"
                  alt="프로필 이미지"
                  className="profile-image"
                />
                <div className="comment_info">
                  <div className="comment_nick">짱아지</div>
                  <div className="comment_rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="comment_text">
                모든 것이 훌륭합니다. 이미 추천했습니다. 👌🏼
              </p>
            </div>
          </div>
        </div>

        <Link href={"/login"} className="review_all">
          모든 후기 보기
        </Link>
      </main>
    </>
  );
}
