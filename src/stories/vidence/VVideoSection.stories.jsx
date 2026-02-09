
import VVideoSection from '../../components/vidence/sections/VVideoSection';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Section/VIDENCE/VVideoSection',
    component: VVideoSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'VIDENCE 이미지 갤러리 섹션입니다. (2컬럼 레이아웃)',
            },
            page: () => (
                <>
                    <SectionTitle title="Props" description="컴포넌트의 Props 목록입니다." />
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 600 }}>Prop</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Default</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>firstImage</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>main_video_001.png</TableCell>
                                    <TableCell>좌측 이미지 URL (1col, 400px)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>secondImage</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>main_video_002.png</TableCell>
                                    <TableCell>우측 이미지 URL (2col, 800px)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>description</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>'Share your own style...'</TableCell>
                                    <TableCell>섹션 설명 텍스트</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>ctaLabel</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>'Discover'</TableCell>
                                    <TableCell>CTA 버튼 텍스트</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>onCtaClick</TableCell>
                                    <TableCell>function</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>CTA 클릭 핸들러</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>sx</TableCell>
                                    <TableCell>object</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>추가 스타일</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            ),
        },
    },
    argTypes: {
        firstImage: {
            control: 'text',
            description: '좌측 이미지 URL (1col, 400px)',
        },
        secondImage: {
            control: 'text',
            description: '우측 이미지 URL (2col, 800px)',
        },
        description: {
            control: 'text',
            description: '섹션 설명 텍스트',
        },
        ctaLabel: {
            control: 'text',
            description: 'CTA 버튼 텍스트',
        },
        onCtaClick: {
            action: 'ctaClicked',
            description: 'CTA 클릭 핸들러',
        },
        sx: {
            control: 'object',
            description: '추가 스타일',
        },
    },
};

export const Default = {
    args: {
        description: 'Share your own style complete with ORR on Instagram by tagging #orr or #orr_today',
        ctaLabel: 'Discover',
    },
};
