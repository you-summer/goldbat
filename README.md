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

### Content1
인터랙티브 배경과 SplitText 애니메이션을 활용한 히어로 섹션입니다.
첫 화면에서 인터랙티브 배경 효과와 타이포그래피 애니메이션을 통해 프로젝트의 분위기를 직관적으로 전달하도록 설계했습니다.


<img width="1900" height="1816" alt="황금박쥐 (1)" src="https://github.com/user-attachments/assets/33185dbd-a747-4e43-8d32-6eb52f9829b8" />

### Content2 & Content3
이 섹션은 황금박쥐 조형물의 현재 가치를 중심으로
실제 금 시세 데이터를 기반으로 한 정보 제공 및 시각화 기능을 담당합니다.

Content2에서는 “오늘의 황금박쥐상 시세”라는 질문형 UI를 통해
사용자의 관심을 유도하고, 이후 Content3에서 실제 데이터를 시각적으로 제공합니다.

Content3에서는 외부 금 시세 API를 활용하여 데이터를 비동기로 가져오고,
황금박쥐 조형물(순금 162kg)의 추정 가치를 계산하여 표시합니다.

또한 과거 시세 데이터를 기반으로 한 라인 차트를 제공하여
가격 변동 흐름을 직관적으로 확인할 수 있도록 구성했습니다.

- 금 시세 API 기반 실시간 데이터 조회
- 황금박쥐 조형물 가치 자동 계산 (162kg 기준)
- CountUp 애니메이션을 통한 금액 증가 효과
- Chart.js를 활용한 시세 변동 시각화
- FadeFramerMotion 기반 UI 등장 애니메이션

