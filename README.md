# 🛍️ TechStore - Product Listing App

TechStore is a simple React-based e-commerce UI prototype that displays featured products in a responsive grid layout. The app uses reusable components like product cards, promotional banners, inventory badges, and a checkout button. This version also includes inline code documentation and a basic unit test for component rendering.

---

## 📂 Project Structure

/src
├── App.jsx # Main application file with product listing logic
├── /components
│ ├── ProductCard.jsx # Displays product image, name, price
│ ├── InventoryBadge.jsx # Shows stock status: in stock, low stock, out of stock
│ ├── PromoBanner.jsx # Promotional top banner
│ └── CheckoutButton.jsx # Checkout button at the bottom
├── /images # Product images used in cards
└── /tests # Unit tests (e.g., ProductCard.test.jsx)

yaml
Copy
Edit

---

## ✨ Features

- 📦 **Product Cards** — Show name, image, price, and discount
- 🔖 **Inventory Badges** — Dynamically indicate stock status
- 🪧 **Promo Banner** — Displays promotional content
- 🧾 **Checkout Button** — Triggers checkout (UI only)
- 🧠 **Inline Comments** — Added for better understanding of code logic
- ✅ **Unit Test** — Tests product name rendering in `ProductCard`

---

## 🧪 Testing

A sample test is written using **React Testing Library**:

```js
// File: __tests__/ProductCard.test.jsx
import { render } from '@testing-library/react';
import ProductCard from '../ProductCard';

test('renders product name correctly', () => {
  const mockProduct = { name: 'Coffee Maker', price: '$89', image: 'coffee.jpg' };
  const { getByText } = render(<ProductCard product={mockProduct} />);
  expect(getByText(/coffee maker/i)).toBeInTheDocument();
});
Run Tests
bash
Copy
Edit
npm test
# or
yarn test
🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/techstore.git
cd techstore
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Start the development server
bash
Copy
Edit
npm start
# or
yarn start
The app will run at http://localhost:3000.