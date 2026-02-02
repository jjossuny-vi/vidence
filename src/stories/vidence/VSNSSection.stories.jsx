
import VSNSSection from '../../components/vidence/sections/VSNSSection';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Section/VIDENCE/VSNSSection',
    component: VSNSSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        feeds: {
            control: 'object',
            description: 'SNS 피드 배열 [{image, hasVideo}]',
        },
        description: {
            control: 'text',
            description: '섹션 설명 텍스트',
        },
        onFeedClick: {
            action: 'feedClicked',
            description: '피드 클릭 핸들러',
        },
        sx: {
            control: 'object',
            description: '추가 스타일',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'VIDENCE SNS 피드 갤러리 섹션입니다.',
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>feeds</TableCell>
                                    <TableCell>Array</TableCell>
                                    <TableCell>[]</TableCell>
                                    <TableCell>SNS 피드 배열 [{'{'}image, hasVideo{'}'}] [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>description</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>'Share your own style...'</TableCell>
                                    <TableCell>섹션 설명 텍스트</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>onFeedClick</TableCell>
                                    <TableCell>function</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>피드 클릭 핸들러</TableCell>
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
        feeds: [
            { image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80', hasVideo: false },
            { image: 'https://images.unsplash.com/photo-1550614000-4b9519e023c9?w=800&q=80', hasVideo: true },
            { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', hasVideo: false },
            { image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', hasVideo: false },
        ],
        description: 'Share your own style complete with ORR on Instagram by tagging #orr or #orr_today',
    },
};
