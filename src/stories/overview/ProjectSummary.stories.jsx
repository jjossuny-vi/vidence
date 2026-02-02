import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Project Summary',
  parameters: {
    layout: 'padded',
  },
};

/** Documentation */
export const Doc = {
  render: () => (
    <>
      <DocumentTitle
        title="Project Summary"
        status="Available"
        note="VIDENCE brand identity and UX flow"
        brandName="VIDENCE"
        systemName="Design System"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          VIDENCE
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          Evidence of Modern Warmth - 일상의 우아함과 실질적인 퀄리티를 증명하는 아카이브형 패션 플랫폼
        </Typography>

        <SectionTitle title="프로젝트 개요" />
        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '30%' } }>도메인</TableCell>
                <TableCell>고감도 모던 컨템포러리 패션 브랜드 (E-commerce)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>기술 스택</TableCell>
                <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>
                  React 19.x + MUI 7.x + Vite 7.x + Storybook 10.x
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>벤치마킹</TableCell>
                <TableCell>Toteme (토템) - 극도로 절제된 레이아웃과 선(Line) 중심의 비주얼 전략</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="브랜드 정체성 (Brand Identity)" />
        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>키워드</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Modern</TableCell>
                <TableCell>불필요한 장식을 배제한 선적인 미학과 구조적 실루엣</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Sophisticated</TableCell>
                <TableCell>보이지 않는 디테일까지 신경 쓴 고감도의 마감 처리</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Warmth</TableCell>
                <TableCell>자연광의 온기가 느껴지는 시각적 톤과 소재의 부드러움</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="핵심 가치 (What We Focus On)" />
        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>가치</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>What over How</TableCell>
                <TableCell>제작 공정의 설명보다 제품 그 자체의 존재감과 시각적 실체에 집중</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>The Uniform</TableCell>
                <TableCell>사용자의 일상을 영화의 한 장면처럼 만드는 현대적 유니폼 제안</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Archive-driven</TableCell>
                <TableCell>시즌 유행에 민감하기보다 오래 소장할 수 있는 가치 있는 오브제로서의 의류</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={ { my: 4 } } />

        <SectionTitle title="UX Flow" />

        <Box sx={ { mb: 3 } }>
          <Typography variant="h6" sx={ { fontWeight: 600, mb: 1 } }>
            1단계: 진입 및 탐색 (The Entrance & Discovery)
          </Typography>
          <TableContainer sx={ { mb: 2 } }>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '25%' } }>Main Hero</TableCell>
                  <TableCell>텍스트 없이 브랜드 무드를 대변하는 압도적 크기의 제품 실루엣 이미지</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Visual Archive</TableCell>
                  <TableCell>비정형 그리드 레이아웃을 통한 일상의 룩북 이미지 탐색</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={ { mb: 3 } }>
          <Typography variant="h6" sx={ { fontWeight: 600, mb: 1 } }>
            2단계: 몰입 및 검증 (Deep Dive & Evidence)
          </Typography>
          <TableContainer sx={ { mb: 2 } }>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '25%' } }>The Archive</TableCell>
                  <TableCell>컬러 팔레트(Red, Neutral, Dark) 및 소재별 큐레이션</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Product Detail</TableCell>
                  <TableCell>소재의 조직감이 느껴지는 초고화질 접사 샷</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Contextual Narrative</TableCell>
                  <TableCell>어울리는 장소, 함께 읽을 책 등 감성 텍스트 포함</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={ { mb: 4 } }>
          <Typography variant="h6" sx={ { fontWeight: 600, mb: 1 } }>
            3단계: 소유 및 연결 (Possession & Continuity)
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '25%' } }>Minimal Checkout</TableCell>
                  <TableCell>극도로 간결한 결제 과정</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Brand Message</TableCell>
                  <TableCell>구매 완료 후 브랜드 철학이 담긴 다정한 메시지</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Divider sx={ { my: 4 } } />

        <SectionTitle title="중요 규칙" />

        <TableContainer sx={ { mb: 4 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>영역</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>규칙</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>컴포넌트 작성</TableCell>
                <TableCell>
                  MUI 기반으로 작성 / sx prop 스타일링 / 독립적·재사용 가능하게 설계
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>스토리 작성</TableCell>
                <TableCell>
                  모든 컴포넌트는 Storybook 스토리와 함께 / 디자이너 친화적 설명 / Props 변형 시각화
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>디자인 시스템</TableCell>
                <TableCell>
                  색상·타이포그래피 테마 중앙 관리 / 일관된 spacing, elevation, borderRadius
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>작업 분리</TableCell>
                <TableCell>
                  UI 레이어(순수 프레젠테이션) + 로직 레이어(비즈니스 로직, API) 분리
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="레이어 분리 원칙" />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>레이어</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>범위</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>특성</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>UI 레이어 (Storybook)</TableCell>
                <TableCell>순수 프레젠테이션 컴포넌트</TableCell>
                <TableCell>로직 없음, 시각적 요소만, Props 제어, 디자이너 테스트 가능</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>로직 레이어 (App)</TableCell>
                <TableCell>비즈니스 로직</TableCell>
                <TableCell>상태 관리, API 호출, 이벤트 핸들링</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </PageContainer>
    </>
  ),
};
