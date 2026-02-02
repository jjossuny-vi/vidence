
import VEpisodeCard from '../../components/vidence/cards/VEpisodeCard';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Cards/VEpisodeCard',
    component: VEpisodeCard,
    tags: ['autodocs'],
    argTypes: {
        image: {
            control: 'text',
            description: '에피소드 커버 이미지 URL',
        },
        episodeNumber: {
            control: 'text',
            description: '에피소드 번호',
        },
        title: {
            control: 'text',
            description: '에피소드 제목',
        },
        size: {
            control: 'select',
            options: ['large', 'small'],
            description: '카드 크기',
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
                component: 'VIDENCE 에피소드 카드입니다. 커버 이미지와 에피소드 정보로 구성됩니다.',
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
                                    <TableCell>에피소드 커버 이미지 URL [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>episodeNumber</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>에피소드 번호 (예: 'EPISODE 8') [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>title</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>에피소드 제목 [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>size</TableCell>
                                    <TableCell>'large' | 'small'</TableCell>
                                    <TableCell>'large'</TableCell>
                                    <TableCell>카드 크기</TableCell>
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

export const Large = {
    args: {
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
        episodeNumber: 'EPISODE 8',
        title: 'Why did you plan Winter Blazer?',
        size: 'large',
    },
};

export const Small = {
    args: {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
        episodeNumber: 'EPISODE 7',
        title: 'Summer Collection Preview',
        size: 'small',
    },
};
