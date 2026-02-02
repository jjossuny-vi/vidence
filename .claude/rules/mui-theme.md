# MUI Custom Theme - VIDENCE (SHOULD)

VIDENCE 브랜드를 위한 MUI 커스텀 테마 설정 규칙

## 테마 파일 관리

- 커스텀 테마는 별도의 파일로 관리한다
- 위치: `src/styles/theme.js` 또는 유사 경로

## Typography

### Heading (제목)
- **Serif 계열**: 고전적이고 우아한 느낌
- 추천: Playfair Display, Cormorant Garamond, Libre Baskerville
- **한글**: Noto Serif KR 또는 높은 weight의 Pretendard

### Body (본문)
- **Sans-serif 계열**: 현대적이고 정갈한 느낌
- **Pretendard Variable** 버전을 웹폰트로 사용

## Color Palette

### VIDENCE 브랜드 컬러

| 토큰 | 색상 | 용도 |
|------|------|------|
| **primary.main** | Black (#000000) | 메인 컬러, CTA |
| **primary.light** | Black (#000000) | 호버 상태 |
| **primary.dark** | Dark Grey (#6B1A28) | 액티브 상태 |
| **secondary.main** | Forest Green (#2D5A4A) | 서브 포인트 |
| **background.default** | White (#FFFFFF) | 기본 배경 |
| **background.paper** | White (#FFFFFF) | 카드/컨테이너 배경 |
| **text.primary** | Charcoal (#2C2C2C) | 기본 텍스트 |
| **text.secondary** | Stone Grey (#6B6B6B) | 보조 텍스트 |

### 컬러 적용 원칙

- **Base**: White 배경
- **Accent**: Black 메인, Forest Green 서브 포인트
- 과도한 컬러 사용 지양, 절제된 팔레트 유지

## Elevation

Paper에 기본적으로 사용되는 elevation의 box shadow 설정:

- x, y offset: 0
- opacity 값: 낮춤
- blur 값: 높임 (dimmed shadow)
- VIDENCE의 부드러운 무드 반영

```jsx
shadows: [
  'none',
  '0 0 8px rgba(0, 0, 0, 0.04)',
  '0 0 16px rgba(0, 0, 0, 0.06)',
  '0 0 24px rgba(0, 0, 0, 0.08)',
  // ...
]
```

## Border Radius

- 기본값: **0** (모던하고 선적인 미학)
- 필요 시: **4~8px** (부드러움 유지)

```jsx
shape: {
  borderRadius: 0  // 기본값
}

// 부드러움이 필요한 경우
sx={{ borderRadius: 1 }}  // 4px
sx={{ borderRadius: 2 }}  // 8px
```

## Spacing

극단적인 여백(White Space) 활용:

```jsx
// 일반적인 간격보다 넓게
sx={{ p: 4 }}   // 32px
sx={{ my: 8 }}  // 64px (섹션 간격)
sx={{ gap: 3 }} // 24px (그리드 간격)
```

## 테마 적용 예시

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const videnceTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',      // Black
      light: '#000000',
      dark: '#6B1A28',
    },
    secondary: {
      main: '#2D5A4A',      // Forest Green
    },
    background: {
      default: '#FFFFFF',   // White
      paper: '#FFFFFF',     // White
    },
    text: {
      primary: '#2C2C2C',   // Charcoal
      secondary: '#6B6B6B', // Stone Grey
    },
  },
  typography: {
    fontFamily: 'Pretendard Variable, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Noto Serif KR", serif',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Playfair Display", "Noto Serif KR", serif',
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Playfair Display", "Noto Serif KR", serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Pretendard Variable, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Pretendard Variable, sans-serif',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '0 0 8px rgba(0, 0, 0, 0.04)',
    '0 0 16px rgba(0, 0, 0, 0.06)',
    '0 0 24px rgba(0, 0, 0, 0.08)',
    // ... 나머지 elevation
  ],
});

function App() {
  return (
    <ThemeProvider theme={videnceTheme}>
      {/* 앱 내용 */}
    </ThemeProvider>
  );
}
```
