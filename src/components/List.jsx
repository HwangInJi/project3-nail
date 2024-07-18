"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function List() {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData(0); // 초기 로드
  }, []);

  async function fetchData(page) {
    setLoading(true);
    try {
      const response = await fetch(`/api/shop/list?limit=20&skip=${page * 20}`); // limit과 skip을 사용하여 페이지네이션
      if (!response.ok) {
        throw new Error("데이터가 없습니다.");
      }
      const data = await response.json();
      setShops((prevShops) => [...prevShops, ...data]);
      setHasMore(data.length === 20); // 20개 미만이면 더 이상 데이터가 없음
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const loadMore = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      fetchData(newPage);
      return newPage;
    });
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="list-container">
      <div className="allist">네일샵 전체 보기</div>
      <div className="list">
        {shops.map((shop, i) => (
          <div className="main__list" key={i}>
            <Link href={`/about?shop_id=${shop._id}`}>
              <div className="list_item">
                <img
                  className="list_image"
                  src={shop.image_urls[0] || "/default-image.jpg"}
                  alt="img"
                />
                <div className="list_text">
                  <span className="list_title">{shop.title}</span>
                  <span className="list_title">{shop.human_review}</span>
                  <span className="list_title">{shop.blog_review}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="load-more">
          <button onClick={loadMore} disabled={loading}>
            {loading ? "로딩 중..." : "더보기"}
          </button>
        </div>
      )}
    </div>
  );
}

export default List;
