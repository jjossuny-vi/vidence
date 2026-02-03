import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, Search, User, ShoppingBag } from 'lucide-react';
import { VMenu } from '../shared';

/**
 * VGNB 컴포넌트
 * VIDENCE 글로벌 네비게이션 바
 * 스크롤 시 sticky 되면서 배경이 투명해짐
 *
 * Props:
 * @param {Array} menuItems - 좌측 메뉴 아이템 배열 [Optional]
 * @param {Array} userMenuItems - 우측 사용자 메뉴 아이템 배열 [Optional]
 * @param {number} activeMenuIndex - 활성 메뉴 인덱스 [Optional]
 * @param {number} scrollThreshold - 스크롤 임계값 (px) [Optional, 기본값: 50]
 * @param {function} onMenuClick - 메뉴 클릭 핸들러 [Optional]
 * @param {function} onLogoClick - 로고 클릭 핸들러 [Optional]
 * @param {function} onSearchClick - 검색 아이콘 클릭 [Optional]
 * @param {function} onUserClick - 사용자 아이콘 클릭 [Optional]
 * @param {function} onCartClick - 장바구니 아이콘 클릭 [Optional]
 * @param {function} onMenuToggle - 햄버거 메뉴 클릭 (모바일) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VGNB menuItems={['NEW IN', 'CLOTHING', 'SHOES']} />
 */
function VGNB({
  menuItems = ['NEW IN', 'CLOTHING', 'SHOES', 'BAGS', 'ACC'],
  userMenuItems = ['COLLECTIONS', 'ORR STORY'],
  activeMenuIndex = -1,
  scrollThreshold = 50,
  onMenuClick,
  onLogoClick,
  onSearchClick,
  onUserClick,
  onCartClick,
  onMenuToggle,
  sx = {},
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return (
    <Box
      component="header"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        px: { xs: 2, md: 5 },
        pt: 0,
        pb: 2,
        backgroundColor: isScrolled ? 'transparent' : 'background.default',
        transition: 'background-color 0.3s ease',
        ...sx,
      }}
    >
        {/* Mobile: Hamburger Menu / Desktop: Left Menu */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3.25,
            minWidth: { xs: 40, md: 'auto' },
          }}
        >
          {/* Hamburger Menu (Mobile Only) */}
          <IconButton
            onClick={onMenuToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: 40,
              height: 40,
              p: 0,
              color: 'primary.main',
            }}
          >
            <Menu size={24} strokeWidth={1.5} />
          </IconButton>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 3.25,
            }}
          >
            {menuItems.map((item, index) => (
              <VMenu
                key={item}
                label={item}
                isActive={index === activeMenuIndex}
                hasUnderline={index === activeMenuIndex}
                onClick={() => onMenuClick?.(index, item)}
              />
            ))}
          </Box>
        </Box>

        {/* Logo (Centered) */}
        <Box
          component="button"
          onClick={onLogoClick}
          sx={{
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            p: 0,
            position: { xs: 'absolute', md: 'static' },
            left: { xs: '50%', md: 'auto' },
            transform: { xs: 'translateX(-50%)', md: 'none' },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              letterSpacing: '4.3px',
              color: 'common.black',
              textTransform: 'uppercase',
            }}
          >
            VIDENCE
          </Typography>
        </Box>

        {/* Right Menu */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3.25,
          }}
        >
          {/* Desktop User Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 3.25,
            }}
          >
            {userMenuItems.map((item) => (
              <VMenu
                key={item}
                label={item}
                onClick={() => onMenuClick?.(-1, item)}
              />
            ))}
          </Box>

          {/* Icons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, md: 2.5 },
            }}
          >
            <IconButton
              onClick={onSearchClick}
              sx={{
                width: 30,
                height: 30,
                p: 0,
                color: 'primary.main',
              }}
            >
              <Search size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton
              onClick={onUserClick}
              sx={{
                width: 30,
                height: 30,
                p: 0,
                color: 'primary.main',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <User size={20} strokeWidth={1.5} />
            </IconButton>
            <IconButton
              onClick={onCartClick}
              sx={{
                width: 30,
                height: 30,
                p: 0,
                color: 'primary.main',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </IconButton>
          </Box>
        </Box>
    </Box>
  );
}

export default VGNB;
