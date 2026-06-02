import type { Product, CartPayload, CartResponse } from '../types/product';

const mockProduct: Product = {
  productId: "P001",
  name: "Sample Product / 示例商品",
  description: "This is a sample product with multiple variants. / 这是一款拥有多种规格的示例商品。",
  images: ["https://via.placeholder.com/400"],
  variants: [
    { skuId: "SKU-001", color: "Black / 黑色", size: "128GB", price: 1299, stock: 10 },
    { skuId: "SKU-002", color: "Black / 黑色", size: "256GB", price: 1499, stock: 0 },
    { skuId: "SKU-003", color: "White / 白色", size: "128GB", price: 1399, stock: 5 },
    { skuId: "SKU-004", color: "White / 白色", size: "256GB", price: 1599, stock: 2 },
  ]
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProductDetail = async (): Promise<Product> => {
  await delay(800);
  return mockProduct;
};

export const addToCart = async (payload: CartPayload): Promise<CartResponse> => {
  await delay(500);
  const targetVariant = mockProduct.variants.find(v => v.skuId === payload.skuId);
  if (!targetVariant || targetVariant.stock < payload.quantity) {
    return { success: false, message: "Insufficient stock / 库存不足" };
  }
  return { success: true, cartCount: Math.floor(Math.random() * 10) + 1 };
};
