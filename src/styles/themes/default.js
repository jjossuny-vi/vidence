/**
 * VIDENCE Theme
 *
 * Evidence of Modern Warmth - 고감도 모던 컨템포러리 패션 브랜드 테마
 *
 * ## 브랜드 정체성
 * - **Modern**: 불필요한 장식을 배제한 선적인 미학과 구조적 실루엣
 * - **Sophisticated**: 보이지 않는 디테일까지 신경 쓴 고감도의 마감 처리
 * - **Warmth**: 자연광의 온기가 느껴지는 시각적 톤과 소재의 부드러움
 *
 * ## 디자인 원칙
 * - **Sharp Corners**: borderRadius 0 (모던하고 선적인 미학)
 * - **Dimmed Shadow**: offset 없이 blur만 사용하는 은은한 그림자
 * - **Warm Neutral Base**: Beige, Stone Grey 기반
 * - **Point Color**: Deep Red, Forest Green 악센트
 */

import { createTheme } from '@mui/material/styles';

// ============================================================
// 1. Color Tokens (VIDENCE 색상 토큰)
// ============================================================
const palette = {
  mode: 'light',

  // 브랜드 색상 - Deep Red (포인트)
  primary: {
    light: '#000000',     // Black
    main: '#000000',      // Black
    dark: '#6B1A28',
    contrastText: '#FFFFFF',
  },

  // 서브 포인트 - Forest Green
  secondary: {
    light: '#3D7A64',
    main: '#2D5A4A',      // Forest Green
    dark: '#1D3A30',
    contrastText: '#FFFFFF',
  },

  // 상태 색상 (Feedback)
  error: {
    light: '#ef5350',
    main: '#d32f2f',
    dark: '#c62828',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#ff9800',
    main: '#ed6c02',
    dark: '#e65100',
    contrastText: '#FFFFFF',
  },
  success: {
    light: '#4caf50',
    main: '#2e7d32',
    dark: '#1b5e20',
    contrastText: '#FFFFFF',
  },
  info: {
    light: '#03a9f4',
    main: '#0288d1',
    dark: '#01579b',
    contrastText: '#FFFFFF',
  },

  // 텍스트 색상 - Charcoal & Stone Grey
  text: {
    primary: '#2C2C2C',     // Charcoal
    secondary: '#6B6B6B',   // Stone Grey
    disabled: '#A0A0A0',
  },

  // 배경 색상 - White
  background: {
    default: '#FFFFFF',     // White
    paper: '#FFFFFF',       // White
  },

  // 구분선 - 부드러운 톤
  divider: 'rgba(44, 44, 44, 0.08)',

  // 액션 상태
  action: {
    active: 'rgba(44, 44, 44, 0.54)',
    hover: 'rgba(44, 44, 44, 0.04)',
    selected: 'rgba(44, 44, 44, 0.08)',
    disabled: 'rgba(44, 44, 44, 0.26)',
    disabledBackground: 'rgba(44, 44, 44, 0.12)',
    focus: 'rgba(44, 44, 44, 0.12)',
  },

  // Neutral Grey 스케일 (Cool Grey)
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

// ============================================================
// 2. Typography Tokens (VIDENCE 타이포그래피)
// ============================================================
const typography = {
  // 기본 폰트 패밀리 (Body - Sans-serif)
  fontFamily: [
    '"Pretendard Variable"',
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    '"Helvetica Neue"',
    '"Segoe UI"',
    '"Apple SD Gothic Neo"',
    '"Noto Sans KR"',
    '"Malgun Gothic"',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    'sans-serif',
  ].join(','),

  // 헤딩 폰트 패밀리 (Serif - 고전적이고 우아한 느낌)
  headingFontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',

  // 폰트 크기 기준
  fontSize: 14,
  htmlFontSize: 16,

  // 폰트 굵기
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  // Display 스타일 (Zalando Sans SemiExpanded)
  display1: {
    fontFamily: '"Zalando Sans SemiExpanded", "Pretendard Variable", sans-serif',
    fontWeight: 600,
    fontSize: '3.5rem',      // 56px
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },

  // 헤딩 스타일 (Serif)
  h1: {
    fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
    fontWeight: 500,
    fontSize: '2.5rem',      // 40px
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h2: {
    fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
    fontWeight: 500,
    fontSize: '2rem',        // 32px
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
    fontWeight: 500,
    fontSize: '1.75rem',     // 28px
    lineHeight: 1.3,
    letterSpacing: '0',
  },
  h4: {
    fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
    fontWeight: 500,
    fontSize: '1.5rem',      // 24px
    lineHeight: 1.3,
    letterSpacing: '0',
  },
  h5: {
    fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
    fontWeight: 500,
    fontSize: '1.25rem',     // 20px
    lineHeight: 1.4,
    letterSpacing: '0',
  },
  h6: {
    fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
    fontWeight: 500,
    fontSize: '1.125rem',    // 18px
    lineHeight: 1.4,
    letterSpacing: '0',
  },

  // 본문 스타일 (Sans-serif)
  body1: {
    fontSize: '1rem',        // 16px
    lineHeight: 1.7,
    letterSpacing: '0.01em',
  },
  body2: {
    fontSize: '0.875rem',    // 14px
    lineHeight: 1.7,
    letterSpacing: '0.01em',
  },

  // 부제목
  subtitle1: {
    fontSize: '1rem',        // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },
  subtitle2: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },

  // 기타
  button: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.04em',
    textTransform: 'none',   // 대문자 변환 비활성화
  },
  caption: {
    fontSize: '0.75rem',     // 12px
    lineHeight: 1.5,
    letterSpacing: '0.03em',
  },
  overline: {
    fontSize: '0.75rem',     // 12px
    fontWeight: 500,
    lineHeight: 2,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
};

// ============================================================
// 3. Spacing Token (간격 토큰 - 극단적인 여백 활용)
// ============================================================
const spacing = 8; // 기본 단위: 8px

// ============================================================
// 4. Shape Token (모양 토큰 - 선적인 미학)
// ============================================================
const shape = {
  borderRadius: 0, // Sharp corners (0px) - 모던하고 선적인 미학
};

// ============================================================
// 5. Shadow Tokens (그림자 토큰 - 은은하고 부드러운)
// ============================================================
const customShadows = {
  none: 'none',
  sm: '0 0 12px rgba(44, 44, 44, 0.04)',
  md: '0 0 16px rgba(44, 44, 44, 0.06)',
  lg: '0 0 24px rgba(44, 44, 44, 0.08)',
  xl: '0 0 32px rgba(44, 44, 44, 0.10)',
};

// ============================================================
// 6. Breakpoints (브레이크포인트)
// ============================================================
const breakpoints = {
  values: {
    xs: 0,      // 모바일
    sm: 600,    // 태블릿 세로
    md: 900,    // 태블릿 가로
    lg: 1200,   // 데스크톱
    xl: 1536,   // 대형 데스크톱
  },
};

// ============================================================
// 7. Z-Index (레이어 순서)
// ============================================================
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// ============================================================
// 8. Transitions (전환 효과 - 부드러운 움직임)
// ============================================================
const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// ============================================================
// 9. Component Overrides (컴포넌트 오버라이드)
// ============================================================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: 'thin',
        backgroundColor: '#FFFFFF', // White
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: customShadows.lg,
        backgroundColor: '#FFFFFF', // White
      },
      elevation0: {
        boxShadow: customShadows.none,
      },
      elevation1: {
        boxShadow: customShadows.sm,
      },
      elevation2: {
        boxShadow: customShadows.md,
      },
      elevation3: {
        boxShadow: customShadows.lg,
      },
      elevation4: {
        boxShadow: customShadows.xl,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        backgroundColor: '#FFFFFF', // White
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 0,
        },
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const defaultTheme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  breakpoints,
  zIndex,
  transitions,
  components,
});

// 커스텀 속성 추가 (타입 확장 없이 접근 가능하도록)
defaultTheme.customShadows = customShadows;

/**
 * VIDENCE 대시보드 스타일 설정
 */
defaultTheme.dashboard = {
  style: 'vidence',
  iconStyle: 'outlined',
  iconWeight: 400,
  cardBorderRadius: 0,
  cardColors: [
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
  ],
  subCardColors: [
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
  ],
  textColor: palette.text.primary,
  textSecondary: palette.text.secondary,
  textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(0px)',
  WebkitBackdropFilter: 'blur(0px)',
  border: '1px solid transparent',
  borderColor: 'transparent',
  shadow: customShadows.lg,
  subBorder: '1px solid rgba(44, 44, 44, 0.06)',
  subShadow: '0 0 0 rgba(0, 0, 0, 0)',
  subBackdropFilter: 'blur(0px)',
  subBorderRadius: 0,
  dividerColor: 'rgba(44, 44, 44, 0.08)',
  progressHeight: 6,
  progressTrackColor: 'rgba(44, 44, 44, 0.08)',
  progressBarColor: palette.primary.main,
  progressGradient: false,
  progressBorderRadius: 0,
  background: '#FFFFFF',
  atmosphere: 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%)',
  atmosphereOpacity: 1,
  accentColor: palette.primary.main,
  accentColors: {
    primary: '#8B2635',    // Deep Red
    secondary: '#2D5A4A',  // Forest Green
    neutral: '#6B6B6B',    // Stone Grey
    warm: '#D4CCC3',       // Warm Grey
  },
  blobs: null,
};

export default defaultTheme;

// 개별 토큰 내보내기 (문서화용)
export {
  palette,
  typography,
  spacing,
  shape,
  customShadows,
  breakpoints,
  zIndex,
  transitions,
  components,
};
