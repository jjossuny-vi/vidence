# Project Summary (CRITICAL)

## 프로젝트 개요

**VIDENCE** (Evidence of Modern Warmth)는 일상의 우아함과 실질적인 퀄리티를 증명(Evidence)하는 아카이브형 패션 플랫폼입니다.

- **도메인**: 고감도 모던 컨템포러리 패션 브랜드 (E-commerce)
- **기술 스택**: React 19.x + MUI 7.x + Vite 7.x + Storybook 10.x

## 브랜드 정체성 (Brand Identity)

| 키워드 | 설명 |
|--------|------|
| **Modern** | 불필요한 장식을 배제한 선적인 미학과 구조적 실루엣 |
| **Sophisticated** | 보이지 않는 디테일까지 신경 쓴 고감도의 마감 처리 |
| **Warmth** | 자연광의 온기가 느껴지는 시각적 톤과 소재의 부드러움 |

## 핵심 가치 (What We Focus On)

- **What over How**: 제작 공정의 설명보다 제품 그 자체의 존재감과 시각적 실체에 집중
- **The Uniform**: 사용자의 일상을 영화의 한 장면처럼 만드는 현대적 유니폼 제안
- **Archive-driven**: 시즌 유행에 민감하기보다 오래 소장할 수 있는 가치 있는 오브제로서의 의류

## 벤치마킹

- **Toteme (토템)**: 극도로 절제된 레이아웃과 선(Line) 중심의 비주얼 전략 차용

## UX Flow

### 1단계: 진입 및 탐색 (The Entrance & Discovery)
- **Main Hero**: 텍스트 없이 브랜드 무드를 대변하는 압도적 크기의 제품 실루엣 이미지
- **Visual Archive**: 비정형 그리드 레이아웃을 통한 일상의 룩북 이미지 탐색

### 2단계: 몰입 및 검증 (Deep Dive & Evidence)
- **The Archive**: 컬러 팔레트(Red, Neutral, Dark) 및 소재별 큐레이션
- **Product Detail**: 소재의 조직감이 느껴지는 초고화질 접사 샷
- **Contextual Narrative**: 어울리는 장소, 함께 읽을 책 등 감성 텍스트 포함

### 3단계: 소유 및 연결 (Possession & Continuity)
- **Minimal Checkout**: 극도로 간결한 결제 과정
- **Brand Message**: 구매 완료 후 브랜드 철학이 담긴 다정한 메시지

## 중요 규칙

### 1. 컴포넌트 작성

- 모든 UI 컴포넌트는 MUI 기반으로 작성
- 스타일링은 MUI의 `sx` prop 사용
- 컴포넌트는 독립적이고 재사용 가능하게 설계

### 2. 스토리 작성

- 모든 컴포넌트는 Storybook 스토리와 함께 작성
- 디자이너가 이해하기 쉬운 명확한 설명 포함
- Props 변형을 시각적으로 확인할 수 있도록 구성

### 3. 디자인 시스템

- 색상, 타이포그래피는 테마 파일에서 중앙 관리
- 일관된 spacing, elevation, borderRadius 적용
- Style 섹션에서 디자인 토큰 문서화

### 4. 작업 분리 원칙

- **UI 레이어**: 순수 프레젠테이션 컴포넌트 (로직 없음)
- **로직 레이어**: 비즈니스 로직, 상태 관리, API 호출
- Storybook에서는 UI 레이어만 다룸
