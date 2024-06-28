import React from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function about() {
  return (
    <>
      <Header />
      <Search />
      <main className="detail_main">
        <h1>엑스 맨션에서 훈련하기</h1>
        <div className="gallery">
          <div className="gallery-item gallery-item-large">
            <img src="/img/01.jpeg" alt="Description 1" />
          </div>
          <div className="gallery-item">
            <img src="/img/02.png" alt="Description 2" />
          </div>
          <div className="gallery-item">
            <img src="/img/03.png" alt="Description 3" />
          </div>
          <div className="gallery-item">
            <img src="/img/04.png" alt="Description 4" />
          </div>
          <div className="gallery-item">
            <img src="/img/05.jpeg" alt="Description 5" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
