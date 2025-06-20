import { render } from '@testing-library/react';
import ProductCard from '../ProductCard';

test('renders product name correctly', () => {
  const mockProduct = { name: 'Coffee Maker', price: '$89', image: 'coffee.jpg' };
  const { getByText } = render(<ProductCard product={mockProduct} />);
  expect(getByText(/coffee maker/i)).toBeInTheDocument();
});