# 🦇 GOLD BAT

<img width="1200" height="630" alt="GOLD BAT (3)" src="https://github.com/user-attachments/assets/51907fa0-410d-457b-85b7-9fba6d72ba1a" />

Next.js 기반으로 구현된 웹 애플리케이션으로,
함평에 위치한 황금박쥐 조형물을 중심으로 한 정보 및 인터랙션 사이트입니다.

사용자는 황금박쥐 조형물의 현재 가치를 실시간으로 확인할 수 있으며,
간단한 방명록 기능을 통해 메시지를 남기고 “황금박쥐의 기운”을 공유받는 경험을 제공합니다.

또한 조형물의 위치 정보를 확인할 수 있으며, 관리자에게 직접 이메일을 전송할 수 있는 기능을 포함하고 있습니다.

🟢 배포 사이트: [[https://naega-box.vercel.app/](https://goldbat-chi.vercel.app/)]


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

### 소원빌기 페이지
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

- “오복” 개념을 활용한 인터랙션 UI
- 감정 참여형 방명록 UX 설계
