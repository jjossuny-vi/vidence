
import VHorizontalDivider from '../../components/vidence/shared/VHorizontalDivider';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Shared/VHorizontalDivider',
    component: VHorizontalDivider,
    tags: ['autodocs'],
    argTypes: {
        activeIndex: {
            control: { type: 'number', min: 0, max: 2 },
            description: '활성 구간 인덱스 (0, 1, 2)',
        },
        width: {
            control: { type: 'number' },
            description: '구분선 전체 너비',
        },
        sx: {
            control: 'object',
            description: '추가 스타일',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'VIDENCE 페이지 구분선입니다. 3단 분할로 현재 위치를 표시합니다.',
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>activeIndex</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>활성 구간 인덱스 (0, 1, 2)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>width</TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>400</TableCell>
                                    <TableCell>구분선 전체 너비</TableCell>
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
        activeIndex: 0,
        width: 400,
    },
};

export const ActiveSecond = {
    args: {
        activeIndex: 1,
        width: 400,
    },
};

export const ActiveThird = {
    args: {
        activeIndex: 2,
        width: 400,
    },
};
