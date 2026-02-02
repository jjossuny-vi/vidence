
import VSNSCard from '../../components/vidence/cards/VSNSCard';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Cards/VSNSCard',
    component: VSNSCard,
    tags: ['autodocs'],
    argTypes: {
        image: {
            control: 'text',
            description: 'SNS 이미지 URL',
        },
        hasVideo: {
            control: 'boolean',
            description: '비디오 아이콘 표시 여부',
        },
        width: {
            control: { type: 'number' },
            description: '카드 너비',
        },
        height: {
            control: { type: 'number' },
            description: '카드 높이',
        },
        onClick: {
            action: 'clicked',
            description: '클릭 핸들러',
        },
        sx: {
            control: 'object',
            description: '추가 스타일',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'VIDENCE SNS 피드 카드입니다. 이미지와 선택적으로 비디오 아이콘을 표시합니다.',
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
                                    <TableCell>-</TableCell>
                                    <TableCell>SNS 이미지 URL [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>hasVideo</TableCell>
                                    <TableCell>boolean</TableCell>
                                    <TableCell>false</TableCell>
                                    <TableCell>비디오 아이콘 표시 여부</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>width</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>393.333</TableCell>
                                    <TableCell>카드 너비</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>height</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>466</TableCell>
                                    <TableCell>카드 높이</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>onClick</TableCell>
                                    <TableCell>function</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>클릭 핸들러</TableCell>
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

export const ImageOnly = {
    args: {
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
        hasVideo: false,
    },
};

export const WithVideo = {
    args: {
        image: 'https://images.unsplash.com/photo-1550614000-4b9519e023c9?w=800&q=80',
        hasVideo: true,
    },
};
