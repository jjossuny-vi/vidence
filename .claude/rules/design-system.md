# Design System (MUST)

## VIDENCE Visual Direction

### Visual Strategy (What to Show)

| 원칙 | 설명 |
|------|------|
| **Texture First** | 원단의 직조감, 스티치 등 소재의 디테일을 극대화하여 시각적으로 '따뜻함'을 증명 |
| **Natural Light** | 인위적인 조명보다 자연광 아래의 부드러운 그림자와 빛의 산란을 활용 |
| **The Point Color** | 화이트 베이스에 Black을 메인 컬러로, Forest Green을 서브 포인트로 사용 |

### Layout Principles

- **Extreme White Space**: 토템 스타일의 극단적인 여백 활용
- **Asymmetric Composition**: 비대칭적 구성으로 시각적 긴장감 형성
- **Line-driven**: 선(Line) 중심의 절제된 비주얼

### Border Radius

- 미세한 곡률(4~8px)을 사용하여 모던함 속에 부드러움 유지
- 기본값: 0 (필요 시에만 4~8px 적용)

## 핵심 원칙

### 1. 기존 컴포넌트 재활용 (CRITICAL)

새로운 컴포넌트를 만들기 전에 반드시 기존 컴포넌트로 대체 가능한지 확인하고, 가능하면 최대한 재활용해라. 불필요한 중복 컴포넌트 생성을 피해야 함.

### 2. 디자인 토큰 사용 (CRITICAL)

스토리북 Style 카테고리에 명시된 디자인 토큰(색상, 타이포그래피, 간격 등)과 아이콘을 우선 사용해라. 임의의 색상값, 폰트 크기, 간격을 직접 지정하지 말고 theme 토큰을 참조할 것.

#### 색상
```jsx
// VIDENCE 브랜드 컬러
sx={{ color: 'primary.main' }}      // Black (메인)
sx={{ backgroundColor: 'secondary.main' }}  // Forest Green (서브 포인트)
sx={{ backgroundColor: 'background.default' }}  // White (배경)
```

#### 타이포그래피
```jsx
// Heading: Serif 계열 (고전적이고 우아한 느낌)
<Typography variant="h1">제목</Typography>

// Body: Sans-serif 계열 (현대적이고 정갈한 느낌)
<Typography variant="body1">본문</Typography>
```

#### 간격
```jsx
// theme.spacing 기반 값 사용
// VIDENCE는 극단적인 여백 활용
sx={{ p: 4, m: 6, gap: 2 }}
```

#### 아이콘
- lucide-react 라이브러리 아이콘 우선 사용
- `src/components/style/Icons.stories.jsx` 참고

## 스타일링 규칙

### MUI 기반

- 모든 기본 컴포넌트는 MUI의 가장 최신버전 사용
- 모든 컴포넌트의 스타일은 가능한 MUI의 sx 함수를 사용
- Grid 컴포넌트는 반드시 `CLAUDE.md`의 MUI Grid Import 규칙 참조

### 모듈화

- 수정 시 의존성을 줄 만한 기능들을 독립된 컴포넌트로 모듈화
- 새로운 수정, 추가사항이 있을 때 지시하지 않은 기존 기능, 형태에 영향을 주지 않도록 조심

### UX 가이드

- VIDENCE 브랜드 정체성(Modern, Sophisticated, Warmth)에 충실
- 토템(Toteme) 스타일의 절제된 레이아웃 지향
- 불필요한 장식 요소 배제, 선적인 미학 추구
