import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Link from "next/link";

export default function WritePage() {
  return (
    <>
      <Header />
      <Search />
      <main className="reviewWrite">
        <div className="header">
          <img
            src="/img/02.png" // 프로필 이미지 경로를 설정하세요.
            alt="Profile"
            className="profileImage"
          />
          <div>
            <h2 className="nickname">닉네임</h2>
            <p className="date">2024.07.03</p>
          </div>
        </div>
        <textarea
          className="textarea"
          placeholder="내용을 입력하세요..."
        ></textarea>
        <div className="uploadedImageContainer">
          <img src="/img/02.png" alt="Uploaded" className="uploadedImage" />
        </div>
        <div className="uploadButtonContainer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageUpload"
          />
        </div>
      </main>
      <Link href={"/about"}>
        <button type="submit" className="write-button">
          작성 완료
        </button>
      </Link>
      <Footer />
    </>
  );
}
