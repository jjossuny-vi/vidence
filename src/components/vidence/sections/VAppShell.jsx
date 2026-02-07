import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import VGNB from './VGNB';
import VFooter from './VFooter';

/**
 * VAppShell 컴포넌트
 * VIDENCE 브랜드를 위한 앱 셸. VGNB(헤더)와 VFooter(푸터)로 구성
 * 스크롤 시 GNB가 sticky 되면서 배경이 투명해짐
 *
 * Props:
 * @param {node} children - 메인 콘텐츠 영역 [Required]
 * @param {Array} gnbMenuItems - GNB 좌측 메뉴 아이템 배열 [Optional]
 * @param {Array} gnbUserMenuItems - GNB 우측 사용자 메뉴 아이템 배열 [Optional]
 * @param {number} activeMenuIndex - 활성 메뉴 인덱스 [Optional]
 * @param {number} scrollThreshold - 스크롤 임계값 (px) [Optional, 기본값: 50]
 * @param {object} footerProps - VFooter에 전달할 props [Optional]
 * @param {boolean} hasFooter - 푸터 표시 여부 [Optional, 기본값: true]
 * @param {function} onMenuClick - GNB 메뉴 클릭 핸들러 [Optional]
 * @param {function} onLogoClick - 로고 클릭 핸들러 [Optional]
 * @param {function} onSearchClick - 검색 아이콘 클릭 [Optional]
 * @param {function} onUserClick - 사용자 아이콘 클릭 [Optional]
 * @param {function} onCartClick - 장바구니 아이콘 클릭 [Optional]
 * @param {function} onMenuToggle - 햄버거 메뉴 클릭 (모바일) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VAppShell>
 *   <VHeroSection />
 *   <VCollectionSection />
 * </VAppShell>
 */
const VAppShell = forwardRef(function VAppShell({
  children,
  gnbMenuItems,
  gnbUserMenuItems,
  activeMenuIndex,
  scrollThreshold = 50,
  footerProps = {},
  hasFooter = true,
  onMenuClick,
  onLogoClick,
  onSearchClick,
  onUserClick,
  onCartClick,
  onMenuToggle,
  sx = {},
}, ref) {
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
        ...sx,
      }}
    >
      {/* VGNB - Global Navigation Bar */}
      <VGNB
        menuItems={gnbMenuItems}
        userMenuItems={gnbUserMenuItems}
        activeMenuIndex={activeMenuIndex}
        scrollThreshold={scrollThreshold}
        onMenuClick={onMenuClick}
        onLogoClick={onLogoClick}
        onSearchClick={onSearchClick}
        onUserClick={onUserClick}
        onCartClick={onCartClick}
        onMenuToggle={onMenuToggle}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>

      {/* VFooter */}
      {hasFooter && <VFooter {...footerProps} />}
    </Box>
  );
});

export default VAppShell;
