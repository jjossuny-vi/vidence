import VProductCard from './VProductCard';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const sampleImage = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop';

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
    price: {
      control: 'number',
      description: '가격',
    },
    originalPrice: {
      control: 'number',
      description: '원가 (할인 시)',
    },
    discountRate: {
      control: 'number',
      description: '할인율 (%)',
    },
    description: {
      control: 'text',
      description: '부가 설명',
    },
    isNew: {
      control: 'boolean',
      description: 'NEW 태그 표시 여부',
    },
    isCollection: {
      control: 'boolean',
      description: 'COLLECTION 태그 표시 여부',
    },
    isOutOfStock: {
      control: 'boolean',
      description: '품절 여부',
    },
    isPreOrder: {
      control: 'boolean',
      description: '예약 주문 여부',
    },
    hasCarousel: {
      control: 'boolean',
      description: '캐로셀 UI 표시 여부',
    },
    colorOptions: {
      control: 'object',
      description: '컬러 옵션 배열',
    },
    currentSlide: {
      control: 'number',
      description: '현재 슬라이드 인덱스',
    },
    totalSlides: {
      control: 'number',
      description: '전체 슬라이드 수',
    },
    isLiked: {
      control: 'boolean',
      description: '좋아요 상태',
    },
    width: {
      control: 'number',
      description: '카드 너비',
    },
    imageHeight: {
      control: 'number',
      description: '이미지 높이',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
    },
    onLikeClick: {
      action: 'likeClicked',
      description: '좋아요 클릭 핸들러',
    },
    onPrevClick: {
      action: 'prevClicked',
      description: '이전 슬라이드 핸들러',
    },
    onNextClick: {
      action: 'nextClicked',
      description: '다음 슬라이드 핸들러',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    width: 336,
    imageHeight: 450,
  },
};

export const WithNewTag = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isNew: true,
  },
};

export const WithPreOrder = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isPreOrder: true,
  },
};

export const WithSalePrice = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    originalPrice: 398,
    discountRate: 25,
  },
};

export const OutOfStock = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    price: 298,
    isOutOfStock: true,
  },
};

export const WithCarousel = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    description: 'early access to new products, exclusive deals',
    price: 298,
    hasCarousel: true,
    colorOptions: ['#aca8a3', '#222'],
    currentSlide: 0,
    totalSlides: 12,
    isLiked: false,
  },
};

export const WithCollectionTag = {
  args: {
    image: sampleImage,
    title: 'Cashmere 100 V-neck Knit Gray',
    description: 'early access to new products, exclusive deals',
    price: 298,
    isCollection: true,
    hasCarousel: true,
    colorOptions: ['#aca8a3', '#222'],
    currentSlide: 0,
    totalSlides: 12,
  },
};

export const AllVariants = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ maxWidth: 1400 }}>
      <Box sx={{ textAlign: 'center' }}>
        <VProductCard
          image={sampleImage}
          title="Default"
          price={298}
          width={280}
          imageHeight={380}
        />
        <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
          Default
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <VProductCard
          image={sampleImage}
          title="With NEW Tag"
          price={298}
          isNew
          width={280}
          imageHeight={380}
        />
        <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
          NEW Tag
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <VProductCard
          image={sampleImage}
          title="With Sale"
          price={298}
          originalPrice={398}
          discountRate={25}
          width={280}
          imageHeight={380}
        />
        <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
          Sale Price
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <VProductCard
          image={sampleImage}
          title="Out of Stock"
          price={298}
          isOutOfStock
          width={280}
          imageHeight={380}
        />
        <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
          Out of Stock
        </Typography>
      </Box>
    </Stack>
  ),
};
