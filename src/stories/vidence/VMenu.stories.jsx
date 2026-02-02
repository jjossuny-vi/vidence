
import VMenu from '../../components/vidence/shared/VMenu';
import SectionTitle from '../../components/storybookDocumentation/SectionTitle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

export default {
    title: 'Custom Component/VIDENCE/Shared/VMenu',
    component: VMenu,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '메뉴 텍스트',
        },
        isActive: {
            control: 'boolean',
            description: '활성 상태 여부',
        },
        hasUnderline: {
            control: 'boolean',
            description: '하단 밑줄 표시 여부',
        },
        variant: {
            control: 'select',
            options: ['default', 'light'],
            description: '메뉴 스타일',
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
                component: 'VIDENCE 메뉴 아이템입니다. GNB, CTA 버튼 등에서 재사용됩니다.',
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
                                    <TableCell sx={{ fontFamily: 'monospace' }}>label</TableCell>
                                    <TableCell>string</TableCell>
                                    <TableCell>-</TableCell>
                                    <TableCell>메뉴 텍스트 [Required]</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>isActive</TableCell>
                                    <TableCell>boolean</TableCell>
                                    <TableCell>false</TableCell>
                                    <TableCell>활성 상태 여부</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>hasUnderline</TableCell>
                                    <TableCell>boolean</TableCell>
                                    <TableCell>false</TableCell>
                                    <TableCell>하단 밑줄 표시 여부</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontFamily: 'monospace' }}>variant</TableCell>
                                    <TableCell>'default' | 'light'</TableCell>
                                    <TableCell>'default'</TableCell>
                                    <TableCell>메뉴 스타일</TableCell>
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
        label: 'BAGS',
        isActive: false,
        hasUnderline: false,
    },
};

export const Active = {
    args: {
        label: 'SHOES',
        isActive: true,
        hasUnderline: true,
    },
};

export const Light = {
    args: {
        label: 'Discover',
        variant: 'light',
        hasUnderline: true,
        sx: { backgroundColor: 'primary.main', p: 1 }, // 배경색이 어두워야 잘 보임
    },
};
