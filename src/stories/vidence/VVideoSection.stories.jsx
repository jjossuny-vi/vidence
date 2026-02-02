
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
    },
    argTypes: {
        videoThumbnail: {
            control: 'text',
            description: '비디오 썸네일 이미지 URL',
        },
        staticImage: {
            control: 'text',
            description: '정적 이미지 URL',
        },
        description: {
            control: 'text',
            description: '섹션 설명 텍스트',
        },
        ctaLabel: {
            control: 'text',
            description: 'CTA 버튼 텍스트',
        },
        breadcrumbCategory: {
            control: 'text',
            description: '브레드크럼 카테고리',
        },
        breadcrumbSubcategory: {
            control: 'text',
            description: '브레드크럼 서브카테고리',
        },
        onPlayClick: {
            action: 'playClicked',
            description: '재생 버튼 클릭 핸들러',
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
    parameters: {
        docs: {
            description: {
                component: 'VIDENCE 비디오/이미지 갤러리 섹션입니다.',
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>videoThumbnail</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>비디오 썸네일 이미지 URL [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>staticImage</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>정적 이미지 URL [Required]</TableCell>
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>breadcrumbCategory</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>'DONO COLLECTION'</TableCell>
                                    <TableCell>브레드크럼 카테고리</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>breadcrumbSubcategory</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>'SWITCH ON'</TableCell>
                                    <TableCell>브레드크럼 서브카테고리</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>onPlayClick</TableCell>
                                    <TableCell>function</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>재생 버튼 클릭 핸들러</TableCell>
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
};

export const Default = {
    args: {
        videoThumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
        staticImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        description: 'Share your own style complete with ORR on Instagram by tagging #orr or #orr_today',
        ctaLabel: 'Discover',
        breadcrumbCategory: 'DONO COLLECTION',
        breadcrumbSubcategory: 'SWITCH ON',
    },
};
