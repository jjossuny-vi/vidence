
import VBreadcrumb from '../../components/vidence/shared/VBreadcrumb';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Shared/VBreadcrumb',
    component: VBreadcrumb,
    tags: ['autodocs'],
    argTypes: {
        category: {
            control: 'text',
            description: '상위 카테고리명',
        },
        subcategory: {
            control: 'text',
            description: '하위 카테고리명',
        },
        variant: {
            control: 'select',
            options: ['dark', 'light'],
            description: '색상 스타일',
        },
        sx: {
            control: 'object',
            description: '추가 스타일',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'VIDENCE 세로 방향 카테고리 라벨입니다. Hero, Video 섹션 좌측에 사용됩니다.',
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>category</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>상위 카테고리명 [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>subcategory</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>하위 카테고리명 [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>variant</TableCell>
                                    <TableCell>'dark' | 'light'</TableCell>
                                    <TableCell>'dark'</TableCell>
                                    <TableCell>색상 스타일</TableCell>
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

export const Dark = {
    args: {
        category: 'OUTER',
        subcategory: 'JACKET',
        variant: 'dark',
    },
};

export const Light = {
    args: {
        category: 'DONO COLLECTION',
        subcategory: 'SWITCH ON',
        variant: 'light',
        sx: { backgroundColor: 'primary.main' }, // 배경색이 어두워야 잘 보임
    },
};
