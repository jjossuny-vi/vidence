import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  heroImages,
  productImages,
  bannerImages,
  categories,
  sortOptions,
  sampleProducts,
} from './productShowcaseData';

export default {
  title: 'Style/Data/ProductShowcaseData',
  parameters: {
    layout: 'padded',
  },
};

const SectionTitle = ({ title, description }) => (
  <Box sx={{ mb: 3, mt: 4, borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}>
    <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
    {description && (
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    )}
  </Box>
);

const ImagePreview = ({ src, label }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
    <Box
      component="img"
      src={src}
      alt={label}
      sx={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 1 }}
    />
    <Typography variant="caption" color="text.secondary">{label}</Typography>
  </Box>
);

const CodeBlock = ({ code }) => (
  <Box
    component="pre"
    sx={{
      backgroundColor: 'grey.100',
      p: 2,
      borderRadius: 1,
      fontSize: 12,
      fontFamily: 'monospace',
      overflow: 'auto',
      maxHeight: 300,
    }}
  >
    {code}
  </Box>
);

export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 900 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        ProductShowcase 샘플 데이터
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        ProductShowcasePage 및 관련 컴포넌트에서 사용하는 목업 데이터입니다.
      </Typography>

      {/* Import 방법 */}
      <SectionTitle title="Import" description="데이터 가져오기" />
      <CodeBlock code={`import {
  heroImages,
  productImages,
  bannerImages,
  categories,
  sortOptions,
  sampleProducts,
} from '../data/productShowcaseData';`} />

      {/* 히어로 이미지 */}
      <SectionTitle title="heroImages" description="히어로 섹션 배경 이미지" />
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3 }}>
        {Object.entries(heroImages).map(([key, url]) => (
          <ImagePreview key={key} src={url} label={key} />
        ))}
      </Box>

      {/* 상품 이미지 */}
      <SectionTitle title="productImages" description="상품 카드 이미지" />
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3 }}>
        {Object.entries(productImages).map(([key, url]) => (
          <ImagePreview key={key} src={url} label={key} />
        ))}
      </Box>

      {/* 배너 이미지 */}
      <SectionTitle title="bannerImages" description="배너 카드 이미지" />
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3 }}>
        {Object.entries(bannerImages).map(([key, url]) => (
          <ImagePreview key={key} src={url} label={key} />
        ))}
      </Box>

      {/* 카테고리 */}
      <SectionTitle title="categories" description="상품 카테고리 탭" />
      <TableContainer sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>label</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.value}>
                <TableCell>{cat.label}</TableCell>
                <TableCell sx={{ fontFamily: 'monospace' }}>{cat.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 정렬 옵션 */}
      <SectionTitle title="sortOptions" description="상품 정렬 옵션" />
      <TableContainer sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>label</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortOptions.map((opt) => (
              <TableRow key={opt.value}>
                <TableCell>{opt.label}</TableCell>
                <TableCell sx={{ fontFamily: 'monospace' }}>{opt.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 샘플 상품 */}
      <SectionTitle title="sampleProducts" description={`샘플 상품 목록 (${sampleProducts.length}개)`} />
      <TableContainer sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>id</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>type</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>title</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>price</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>variants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell sx={{ fontFamily: 'monospace' }}>{product.type || 'product'}</TableCell>
                <TableCell>{product.title || product.category}</TableCell>
                <TableCell>{product.price ? `$${product.price}` : '-'}</TableCell>
                <TableCell sx={{ fontSize: 11 }}>
                  {[
                    product.isNew && 'NEW',
                    product.isOutOfStock && 'OUT OF STOCK',
                    product.isPreOrder && 'PRE-ORDER',
                    product.hasCarousel && 'CAROUSEL',
                    product.discountRate && `${product.discountRate}% OFF`,
                  ].filter(Boolean).join(', ') || '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 사용 예시 */}
      <SectionTitle title="사용 예시" description="컴포넌트에서 데이터 활용하기" />
      <CodeBlock code={`// ProductShowcasePage에서 사용
<ProductShowcasePage
  heroImage={heroImages.default}
  categories={categories}
  sortOptions={sortOptions}
  products={sampleProducts}
/>

// 일부 상품만 사용
<VProductListSection
  products={sampleProducts.slice(0, 6)}
/>

// 필터링된 상품
const newProducts = sampleProducts.filter(p => p.isNew);`} />
    </Box>
  ),
};
