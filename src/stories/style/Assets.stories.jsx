import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';

export default {
  title: 'Style/Assets',
  parameters: {
    layout: 'padded',
  },
};

/** 기본 - 에셋 개요 */
export const Default = {
  render: () => {
    // 프로젝트에서 사용하는 이미지 에셋
    const imageAssets = [
      {
        name: 'store-visual.png',
        path: '/store-visual.png',
        category: 'Brand',
        description: '팝업 스토어 비주얼 이미지',
        size: '1920x1080',
      },
      {
        name: 'vite.svg',
        path: '/vite.svg',
        category: 'Logo',
        description: 'Vite 로고 (개발용)',
        size: 'SVG',
      },
      {
        name: 'react.svg',
        path: '/src/assets/react.svg',
        category: 'Logo',
        description: 'React 로고 (개발용)',
        size: 'SVG',
      },
    ];

    // 샘플 이미지 (Unsplash)
    const sampleImages = [
      {
        name: 'Hero Image',
        url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop',
        usage: 'VHeroSection, VProductCard',
        description: '패션 제품 히어로 이미지',
      },
      {
        name: 'Product Image 1',
        url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
        usage: 'VProductCard, VMDSection',
        description: '캐시미어 니트 상품 이미지',
      },
      {
        name: 'Product Image 2',
        url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
        usage: 'VProductCard, VVideoSection',
        description: '레더 재킷 상품 이미지',
      },
      {
        name: 'Category Image',
        url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop',
        usage: 'VCategoryCard, VCollectionSection',
        description: '카테고리 대표 이미지',
      },
    ];

    // 비디오 에셋
    const videoAssets = [
      {
        name: '9-motion.mp4',
        path: '/src/assets/video/9-motion.mp4',
        category: 'Video',
        description: '모션 비디오 에셋',
        duration: '-',
      },
    ];

    // 에셋 구조
    const assetStructure = {
      'src/assets/': {
        'product/': '제품 이미지 (.jpg, .png, .webp)',
        'video/': '비디오 파일 (.mp4)',
        '*.svg': 'SVG 아이콘/로고',
      },
      'public/': {
        '*.png': '정적 이미지 파일',
        '*.svg': 'Favicon, 로고 등',
      },
      'Unsplash (External)': {
        'product/': '샘플 상품 이미지',
        'hero/': '히어로 섹션 이미지',
        'category/': '카테고리 이미지',
      },
    };

    return (
      <>
        <DocumentTitle
          title="Assets"
          status="Available"
          note="Project image, video, and media assets"
          brandName="VIDENCE"
          systemName="Design System"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Assets
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            프로젝트에서 사용하는 이미지, 비디오 등 미디어 에셋 목록입니다.
          </Typography>

          {/* 에셋 구조 */}
          <SectionTitle
            title="에셋 구조"
            description="프로젝트 에셋 디렉토리 구조"
          />
          <Box
            sx={ {
              p: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              mb: 4,
              fontFamily: 'monospace',
              fontSize: 13,
            } }
          >
            { Object.entries(assetStructure).map(([folder, contents]) => (
              <Box key={ folder } sx={ { mb: 2 } }>
                <Typography
                  sx={ {
                    fontWeight: 600,
                    color: 'primary.main',
                    fontFamily: 'monospace',
                  } }
                >
                  { folder }
                </Typography>
                <Box sx={ { pl: 2, mt: 0.5 } }>
                  { Object.entries(contents).map(([key, desc]) => (
                    <Box key={ key } sx={ { display: 'flex', gap: 2, mb: 0.5 } }>
                      <Typography
                        component="span"
                        sx={ { fontFamily: 'monospace', color: 'secondary.main' } }
                      >
                        └── { key }
                      </Typography>
                      <Typography
                        component="span"
                        sx={ { color: 'text.secondary', fontSize: 12 } }
                      >
                        { desc }
                      </Typography>
                    </Box>
                  )) }
                </Box>
              </Box>
            )) }
          </Box>

          {/* 프로젝트 이미지 에셋 */}
          <SectionTitle
            title="프로젝트 이미지"
            description="프로젝트에 포함된 정적 이미지 파일"
          />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Preview</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Name</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Path</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Category</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { imageAssets.map((asset) => (
                  <TableRow key={ asset.name }>
                    <TableCell>
                      <Box
                        component="img"
                        src={ asset.path }
                        alt={ asset.name }
                        sx={ {
                          width: 60,
                          height: 60,
                          objectFit: 'cover',
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: 'divider',
                        } }
                      />
                    </TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>
                      { asset.name }
                    </TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>
                      { asset.path }
                    </TableCell>
                    <TableCell>{ asset.category }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>
                      { asset.description }
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          {/* 샘플 이미지 (Unsplash) */}
          <SectionTitle
            title="샘플 이미지 (Unsplash)"
            description="개발/데모용 외부 이미지 URL"
          />
          <Box
            sx={ {
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 2,
              mb: 4,
            } }
          >
            { sampleImages.map((image) => (
              <Box key={ image.name }>
                <Box
                  component="img"
                  src={ image.url }
                  alt={ image.name }
                  sx={ {
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 1,
                  } }
                />
                <Typography variant="caption" sx={ { fontWeight: 600, display: 'block' } }>
                  { image.name }
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={ { display: 'block' } }>
                  { image.description }
                </Typography>
                <Typography
                  variant="caption"
                  sx={ { fontFamily: 'monospace', fontSize: 10, color: 'secondary.main' } }
                >
                  { image.usage }
                </Typography>
              </Box>
            )) }
          </Box>

          {/* 비디오 에셋 */}
          <SectionTitle
            title="비디오 에셋"
            description="프로젝트에 포함된 비디오 파일"
          />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Name</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Path</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Category</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { videoAssets.map((asset) => (
                  <TableRow key={ asset.name }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>
                      { asset.name }
                    </TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>
                      { asset.path }
                    </TableCell>
                    <TableCell>{ asset.category }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>
                      { asset.description }
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          {/* 사용 예시 */}
          <SectionTitle
            title="사용 예시"
            description="에셋을 컴포넌트에서 사용하는 방법"
          />
          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              borderRadius: 1,
              mb: 4,
            } }
          >
{ `// 제품 이미지 (src/assets/product)
import productImg from '../assets/product/knit-gray.jpg';
<img src={productImg} alt="Knit Gray" />

// 정적 이미지 (public 폴더)
<Box component="img" src="/store-visual.png" alt="Store" />

// SVG 이미지 (src/assets)
import reactLogo from '../assets/react.svg';
<img src={reactLogo} alt="React" />

// 외부 이미지 (Unsplash)
<Box
  component="img"
  src="https://images.unsplash.com/photo-1591047139829?w=400&h=600&fit=crop"
  alt="Product"
  sx={{ width: '100%', height: 400, objectFit: 'cover' }}
/>

// 비디오 사용
<video src="/src/assets/video/9-motion.mp4" autoPlay muted loop />` }
          </Box>

          {/* Vibe Coding Prompt */}
          <SectionTitle
            title="Vibe Coding Prompt"
            description="AI 코딩 도구에서 활용할 수 있는 프롬프트 예시"
          />
          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.900',
              color: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              borderRadius: 1,
            } }
          >
{ `"VHeroSection에 히어로 이미지를 추가해줘.
Unsplash에서 패션 관련 이미지 URL을 사용하고,
objectFit: cover로 전체 영역을 채워줘."

"VMDSection에 상품 이미지 8개를 추가해줘.
각 상품에 서로 다른 Unsplash 이미지를 사용하고,
w=400&h=600&fit=crop 파라미터로 크기를 맞춰줘."

"public 폴더의 store-visual.png를 VStoreSection에 적용해줘.
이미지가 섹션 전체 너비를 채우도록 해줘."` }
          </Box>
        </PageContainer>
      </>
    );
  },
};
