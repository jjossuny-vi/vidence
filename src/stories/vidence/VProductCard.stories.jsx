
import VProductCard from '../../components/vidence/cards/VProductCard';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Cards/VProductCard',
    component: VProductCard,
    tags: ['autodocs'],
    argTypes: {
        image: {
            control: 'text',
            description: '상품 이미지 URL',
        },
        title: {
            control: 'text',
            description: '상품명',
        },
        width: {
            control: { type: 'number' },
            description: '카드 너비',
        },
        imageHeight: {
            control: { type: 'number' },
            description: '이미지 높이',
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
                component: 'VIDENCE 상품 카드입니다. 이미지와 상품명을 표시합니다.',
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
                                    <TableCell>상품 이미지 URL [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>title</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>상품명 [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>width</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>336</TableCell>
                                    <TableCell>카드 너비</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>imageHeight</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>450</TableCell>
                                    <TableCell>이미지 높이</TableCell>
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
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
        title: 'Cashmere 100 V-neck Knit Gray',
    },
};
