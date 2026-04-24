# 🦇 GOLD BAT

<img width="1200" height="630" alt="GOLD BAT (3)" src="https://github.com/user-attachments/assets/51907fa0-410d-457b-85b7-9fba6d72ba1a" />

Next.js 기반으로 구현된 웹 애플리케이션으로,
함평에 위치한 황금박쥐 조형물을 중심으로 한 정보 및 인터랙션 사이트입니다.

사용자는 황금박쥐 조형물의 현재 가치를 실시간으로 확인할 수 있으며,
간단한 방명록 기능을 통해 메시지를 남기고 “황금박쥐의 기운”을 공유받는 경험을 제공합니다.

또한 조형물의 위치 정보를 확인할 수 있으며, 관리자에게 직접 이메일을 전송할 수 있는 기능을 포함하고 있습니다.

🟢 배포 사이트: https://goldbat-chi.vercel.app/


---

## 개발의도
함평 황금박쥐 조형물을 단순한 관광 요소가 아닌  
인터랙티브한 디지털 경험으로 재해석하는 것을 목표로 했습니다.

사용자가 정보 확인 → 감정 참여 → 실제 방문까지 이어지는  
UX 흐름을 설계했습니다.

---

## 🙋‍♀️ 프로젝트 참가 인원
1인 개인 프로젝트

---

## 💻 미리보기

### 메인페이지

<img width="1895" height="901" alt="image" src="https://github.com/user-attachments/assets/fcbaf148-8ee8-4d1f-b02d-d6e30d5abd2c" />

#### Content1
인터랙티브 배경과 SplitText 애니메이션을 활용한 히어로 섹션입니다.
첫 화면에서 인터랙티브 배경 효과와 타이포그래피 애니메이션을 통해 프로젝트의 분위기를 직관적으로 전달하도록 설계했습니다.


<img width="1900" height="1816" alt="황금박쥐 (1)" src="https://github.com/user-attachments/assets/33185dbd-a747-4e43-8d32-6eb52f9829b8" />

#### Content2 & Content3
금 시세 API를 활용하여 데이터를 비동기로 가져옵니다.</br>
황금박쥐(162kg)의 가치를 자동 계산하여 표시합니다.</br>
과거 데이터를 기반으로 라인 차트를 제공합니다.</br>

**황금박쥐 시세 정보 시스템**
- 금 시세 API 기반 실시간 데이터 조회
- 황금박쥐 조형물 (162kg) 가치 자동 계산
- CountUp 애니메이션으로 숫자 인터랙션
- Chart.js 기반 시세 변동 시각화

### 소원빌기 페이지
<img width="1130" height="1426" alt="황금박쥐-소원빌기" src="https://github.com/user-attachments/assets/c75dd518-09d1-4079-9255-e83a98af25ce" />

#### Wish / Comment Section
단순 CRUD 기능이 아니라</br>
스토리 기반 UX 흐름을 설계하여 사용자가 메시지를 남기는 과정을 하나의 경험처럼 느낄 수 있도록 구현했습니다.</br>
Firebase를 활용해 데이터를 저장하고,</br>
Framer Motion으로 단계별 인터랙션을 구성했습니다.</br>
- 스토리 기반 메시지 UI 구성
- Framer Motion 기반 단계별 애니메이션
- 조건 기반 댓글 입력 검증 (“따봉 황금박쥐야 고마워” 포함)
- Firestore 기반 댓글 저장 및 실시간 렌더링
- “오복” 개념을 활용한 인터랙션 UI
- 감정 참여형 방명록 UX 설계

### 길찾기 페이지
<img width="1920" height="1525" alt="황금박쥐-전시장-찾아가기" src="https://github.com/user-attachments/assets/72821099-ff3e-4af8-aa52-8c3718e96aae" />

#### Location
사용자가 실제 방문까지 자연스럽게 이어질 수 있도록  </br>
Kakao Map API를 활용한 위치 시각화와  </br>
카카오/네이버 지도 외부 연동을 함께 구현했습니다.</br>
또한 주소 복사 기능과 정보 카드 UI를 통해 접근성을 높였습니다.</br>

- Kakao Map 기반 위치 시각화
- 카카오맵 / 네이버지도 외부 경로 연동
- 주소 복사 기능
- 관람 시간 및 운영 정보 제공
- 카드 기반 정보 구조 UI 설계

### 문의 페이지
<img width="1232" height="804" alt="image" src="https://github.com/user-attachments/assets/dcef63f6-8078-4cb9-8ac0-af58e4f239b9" />

#### Contact
사용자가 프로젝트 제작자에게 직접 문의를 남길 수 있는 커뮤니케이션 페이지입니다.
- 컴포넌트 분리를 통한 구조화 (ContactForm)
- 프로젝트 피드백 및 문의 채널 역할
- 사용자-개발자 간 커뮤니케이션 인터페이스 설계

### 메타데이터를 이용한 SEO설정
<img width="374" height="275" alt="image" src="https://github.com/user-attachments/assets/8bec82fe-1d5b-4e1e-ba14-4ab7ea48c851" />


---

## 🛠️ 사용 기술
#### Frontend
- Next.js (App Router)
  - Server Component / Client Component 구조 활용
  - metadata를 활용한 SEO 설정
- React
  - useState / useEffect 기반 상태 관리
  - 컴포넌트 단위 UI 분리 및 재사용 구조 설계
- TypeScript
  - API 데이터 타입 정의 및 안정성 확보

#### UI / Styling
- Tailwind CSS
- CSS Modules

#### 라이브러리
- Chart.js
- framer motion
- React bits

#### BackEnd
- firebase firestore

#### API
- 금 시세 API

#### 배포
- Vercel

---

