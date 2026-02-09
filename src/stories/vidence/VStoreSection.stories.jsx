
import VStoreSection from '../../components/vidence/sections/VStoreSection';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Section/VIDENCE/VStoreSection',
    component: VStoreSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'VIDENCE 팝업 스토어 소개 섹션입니다.',
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>image</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>main_store.png</TableCell>
                                    <TableCell>스토어 이미지 URL</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>description</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>Default description...</TableCell>
                                    <TableCell>설명 텍스트</TableCell>
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
        image: {
            control: 'text',
            description: '스토어 이미지 URL',
        },
        description: {
            control: 'text',
            description: '설명 텍스트',
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
        // image는 컴포넌트 기본값 사용 (main_store.png)
        description: "Reflecting the true value of our products.\nWe believe in the unique beauty that develops over time.",
        ctaLabel: 'Discover',
    },
};
