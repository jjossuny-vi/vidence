import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ChevronRight, Globe } from 'lucide-react';

/**
 * VFooter 컴포넌트
 * VIDENCE 푸터
 *
 * Props:
 * @param {Array} supportLinks - 지원 링크 배열 [Optional]
 * @param {Array} policyLinks - 정책 링크 배열 [Optional]
 * @param {Array} aboutLinks - 회사 소개 링크 배열 [Optional]
 * @param {object} csCenter - CS 센터 정보 [Optional]
 * @param {string} copyright - 저작권 텍스트 [Optional]
 * @param {string} country - 국가 [Optional, 기본값: 'UNITED STATES']
 * @param {function} onLinkClick - 링크 클릭 핸들러 [Optional]
 * @param {function} onCountryClick - 국가 선택 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <VFooter />
 */
function VFooter({
  supportLinks = [
    { label: 'NOTICES' },
    { label: 'FAQS' },
    { label: 'MEMBERSHIP BENEFITS' },
    { label: 'DOWNLOAD APP' },
  ],
  policyLinks = [
    { label: 'TERMS OF SERVICE' },
    { label: 'PRIVACY POLICY' },
    { label: 'EXCHANGE/REFUND POLICY' },
    { label: 'SHIPPING POLICY' },
    { label: 'CCPA CONSUMER RIGHTS' },
    { label: 'ACCESSIBILITY STATEMENT' },
    { label: 'COOKIE POLICY' },
  ],
  aboutLinks = [
    { label: 'ABOUT THE BRAND' },
    { label: 'STORE LOCATOR' },
    { label: 'CONTACT US' },
  ],
  csCenter = {
    liveChat: {
      label: '1:1 LIVE CHAT',
      hours: 'WEEKDAYS 09:00–17:30',
    },
    phone: {
      number: '+82-1588-6941',
      hours: 'WEEKDAYS 14:00–17:00',
    },
  },
  copyright = '© 2026 VIDENCE. All Rights Reserved.',
  country = 'UNITED STATES',
  onLinkClick,
  onCountryClick,
  sx = {},
}) {
  const linkStyle = {
    fontFamily: '"Pretendard Variable", sans-serif',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '1.2px',
    color: 'primary.main',
    textTransform: 'uppercase',
  };

  const titleStyle = {
    fontFamily: '"Pretendard Variable", sans-serif',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '2.8px',
    color: 'primary.main',
    textTransform: 'uppercase',
  };

  const renderLinkSection = (title, links, width) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 1.5,
        width,
      }}
    >
      <Typography sx={titleStyle}>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {links.map((link) => (
          <Box
            key={link.label}
            component="button"
            onClick={() => onLinkClick?.(link)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 30,
              py: 1,
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              p: 0,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Typography sx={linkStyle}>{link.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'common.white',
        borderTop: '1px solid',
        borderColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 6.25,
            p: 5,
          }}
        >
          {/* Info Sections */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 15,
            }}
          >
            {renderLinkSection('SUPPORT', supportLinks, 174)}
            {renderLinkSection('POLICY', policyLinks, 208)}
            {renderLinkSection('ABOUT US', aboutLinks, 140)}

            {/* CS Center */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1.5,
                width: 178,
              }}
            >
              <Typography sx={titleStyle}>CS CENTER</Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  width: '100%',
                }}
              >
                {/* Live Chat */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', height: 30, py: 1 }}>
                    <Typography sx={{ ...linkStyle, fontWeight: 700 }}>
                      {csCenter.liveChat.label}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', height: 30, py: 1 }}>
                    <Typography sx={linkStyle}>{csCenter.liveChat.hours}</Typography>
                  </Box>
                </Box>

                {/* Phone */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', height: 30, py: 1 }}>
                    <Typography sx={{ ...linkStyle, fontWeight: 700 }}>
                      {csCenter.phone.number}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', height: 30, py: 1 }}>
                    <Typography sx={linkStyle}>{csCenter.phone.hours}</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Country Selector */}
              <Box
                component="button"
                onClick={onCountryClick}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  height: 40,
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  p: 0,
                }}
              >
                <Globe size={20} />
                <Typography sx={{ ...linkStyle, fontWeight: 700 }}>
                  {country}
                </Typography>
                <ChevronRight size={16} />
              </Box>
            </Box>
          </Box>

          {/* Copyright */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography sx={linkStyle}>{copyright}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default VFooter;
