
import VCategoryCard from '../../components/vidence/cards/VCategoryCard';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Cards/VCategoryCard',
    component: VCategoryCard,
    tags: ['autodocs'],
    argTypes: {
        image: {
            control: 'text',
            description: '카테고리 이미지 URL',
        },
        label: {
            control: 'text',
            description: '카테고리 라벨',
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
                component: 'VIDENCE 카테고리 카드입니다. 이미지, 오버레이, 라벨로 구성됩니다.',
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
                                    <TableCell>카테고리 이미지 URL [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>label</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>카테고리 라벨 [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>width</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>346</TableCell>
                                    <TableCell>카드 너비</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>height</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>500</TableCell>
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

export const Default = {
    args: {
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
        label: 'CLOTHING',
    },
};
