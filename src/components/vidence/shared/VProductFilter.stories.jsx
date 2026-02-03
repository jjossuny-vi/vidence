import VProductFilter from './VProductFilter';

const defaultCategories = [
  { label: 'ALL', value: 'all' },
  { label: 'JACKET', value: 'jacket' },
  { label: 'JUMPER', value: 'jumper' },
  { label: 'COAT', value: 'coat' },
  { label: 'DOWN', value: 'down' },
];

const defaultSortOptions = [
  { label: 'NEW ITEM', value: 'new' },
  { label: 'PRICE LOW', value: 'price_asc' },
  { label: 'PRICE HIGH', value: 'price_desc' },
  { label: 'BEST', value: 'best' },
];

export default {
  title: 'Custom Component/VIDENCE/Shared/VProductFilter',
  component: VProductFilter,
  tags: ['autodocs'],
  argTypes: {
    categories: {
      control: 'object',
      description: '카테고리 목록 [{ label, value }]',
    },
    activeCategory: {
      control: 'select',
      options: ['all', 'jacket', 'jumper', 'coat', 'down'],
      description: '활성화된 카테고리 값',
    },
    sortOptions: {
      control: 'object',
      description: '정렬 옵션 목록 [{ label, value }]',
    },
    selectedSort: {
      control: 'select',
      options: ['new', 'price_asc', 'price_desc', 'best'],
      description: '선택된 정렬 값',
    },
    filterCount: {
      control: 'number',
      description: '적용된 필터 수',
    },
    onCategoryChange: {
      action: 'categoryChanged',
      description: '카테고리 변경 핸들러',
    },
    onSortChange: {
      action: 'sortChanged',
      description: '정렬 변경 핸들러',
    },
    onFilterClick: {
      action: 'filterClicked',
      description: '필터 클릭 핸들러',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    categories: defaultCategories,
    activeCategory: 'all',
    sortOptions: defaultSortOptions,
    selectedSort: 'new',
    filterCount: 0,
  },
};

export const WithActiveFilter = {
  args: {
    categories: defaultCategories,
    activeCategory: 'jacket',
    sortOptions: defaultSortOptions,
    selectedSort: 'price_asc',
    filterCount: 3,
  },
};

export const MinimalCategories = {
  args: {
    categories: [
      { label: 'ALL', value: 'all' },
      { label: 'BAGS', value: 'bags' },
      { label: 'SHOES', value: 'shoes' },
    ],
    activeCategory: 'all',
    sortOptions: defaultSortOptions,
    selectedSort: 'new',
    filterCount: 0,
  },
};
