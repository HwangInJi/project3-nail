## 전국 네일샵 익명 리뷰 사이트
[오늘네일 사이트](https://onel.vercel.app/listpage)

### 📑 제작 의도

- 네일샵이 주변에 늘어나는 만큼 소비자들이 어디로 가는게 가장 좋을까? 를 해결하기 위해 많이 하는 건 검색입니다. 하지만 네이버플레이스같은 곳은 업체에서 리뷰관리가 가능하기 때문에 이러한 문제점을 조금이나마 해결하고자 잡플래닛과 같은 형식의 익명 리뷰사이트를 만들고자 했습니다.

### 🏷️ 사용한 기술 & 스택

- python : 정부에서 제공하는 전국 네일샵 데이터를 가져온 후 네이버플레이스에 등록된 네일샵과 비교하여 존재하는 네일샵만 따로 Python을 사용하여 데이터를 JSON파일로 수집
- next.js  : 수집한 JSON파일의 데이터를 next.js로 웹사이트에 연동 및 scss로 전체적인 레이아웃 디자인 진행
- Vercel : 완성한 결과물을 다른 사람들도 볼 수 있게 Vercel에서 웹사이트로 링크화함

### 👍 주요 기능

- 서울, 경기, 대전, 부산 등 지역별 네일샵 전체를 확인 가능
- 상세보기를 통해 운영시간, 사진, 위치, 가격 등 기본 정보를 알 수 있고 리뷰창을 통해 사람들이 다녀간 네일샵 리뷰 확인 가능 
- 저장하기를 통해 내가 원하는 네일샵의 찜목록 리스트를 만들 수 있음
- 메인에서 리뷰많은순, 평점높은순의 네일샵 랭킹 6위를 볼 수 있음

### ✨사이트 프리뷰

#### [홈화면]

![1](https://github.com/HwangInJi/project3-nail/assets/163365140/376c64b4-2b46-4125-81e4-b54ba39d5702)
![image](https://github.com/HwangInJi/project3-nail/assets/163365140/292e64a9-3dd3-4406-bfb6-2f64b184bac4)
![image](https://github.com/HwangInJi/project3-nail/assets/163365140/58d66b66-4053-4d2c-854c-34e8364f885a)

- 홈 화면은 상단에 서치할수 있는 탭이 있고, 그 밑에 지역별 링크가 있어 해당 지역을 누르면 그 지역에 위치한 네일샵만 볼 수 있음
- 리뷰와 평점에 대한 랭킹 6위를 볼 수 있고 그 밑에는 해당 지역의 전체 네일샵 정보를 볼 수 있도록 구현

#### [상세보기&리뷰작성]

![image](https://github.com/HwangInJi/project3-nail/assets/163365140/99b80a6d-925f-48a0-919f-45f3b068e2ab)
![image](https://github.com/HwangInJi/project3-nail/assets/163365140/292e64a9-3dd3-4406-bfb6-2f64b184bac4)
![image](https://github.com/HwangInJi/project3-nail/assets/163365140/58d66b66-4053-4d2c-854c-34e8364f885a)
![image](https://github.com/HwangInJi/project3-nail/assets/163365140/583229c7-64a2-41a3-838e-c07f9af11572)

- 상세보기를 통해 위치, 업체에 등록된 사진, 샵 가격 등 기본 정보를 볼 수 있도록 구현
- 오른쪽 리뷰를 통해 이용자가 남긴 리뷰들을 볼 수 있도록 레이아웃 구성
- 리뷰작성페이지에는 간단한 리뷰를 쓸 수 있고, 평점을 통해 이 네일샵에 대한 생각을 보여줄 수 있도록 기능 구현
  
## 설치

```bash
npx create-next-app@latest
npm i (노드 모듈이 안깔릴경우)
npm i gsap sass lenis
npm install mongodb
```

## 실행

```bash
rfc (내용 생성)
npm run dev
```
# onel
