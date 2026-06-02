// src/components/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import type { Product, CartResponse } from '../types/product';
import { getProductDetail, postAddToCart } from '../api/productService';
import VariantSelector from './VariantSelector';
import fallbackImg from '../images/ppmt.jpg';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [cartCount, setCartCount] = useState<number>(0);
  const [addingToCart, setAddingToCart] = useState<boolean>(false);

  useEffect(() => {
    getProductDetail()
      .then(data => {
        setProduct(data);
        if (data.variants.length > 0) {
          setSelectedColor(data.variants[0].color);
          setSelectedSize(data.variants[0].size);
        }
      })
      .catch(() => setError('Failed to fetch product / 获取商品信息失败'))
      .finally(() => setLoading(false));
  }, []);

  const currentVariant = product?.variants.find(
    v => v.color === selectedColor && v.size === selectedSize
  );
  const isOutOfStock = currentVariant ? currentVariant.stock === 0 : true;

  const handleAddToCart = async () => {
    if (!product || !currentVariant) return;
    setAddingToCart(true);
    try {
      const res: CartResponse = await postAddToCart({
        productId: product.productId,
        skuId: currentVariant.skuId,
        quantity
      });
      if (res.success) {
        alert('Added to cart successfully! / 加入购物车成功！');
        setCartCount(res.cartCount || 0);
      } else {
        alert(`Error / 错误: ${res.message}`);
      }
    } catch {
      alert('Failed to add to cart / 加入购物车失败');
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) return <div className="loading">Loading product data... / 加载商品数据中...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return null;

  const colors = [...new Set(product.variants.map(v => v.color))];
  const sizes = [...new Set(product.variants.map(v => v.size))];

  return (
    <div className="product-detail">
      <div className="product-image">
        {/* <img src={product.images[0] || fallbackImg} alt={product.name} /> */}
        <img src={fallbackImg} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <div className="price-wrapper">
          <span className="price-symbol">¥</span>
          <span className="price-value">{currentVariant?.price ?? '---'}</span>
        </div>
        <p className={`stock-status ${isOutOfStock ? 'out-of-stock' : 'in-stock'}`}>
          {isOutOfStock ? 'Out of Stock / 暂时缺货' : `In Stock (Stock: ${currentVariant?.stock})`}
        </p>
        <VariantSelector label="Color / 颜色" options={colors} selected={selectedColor} onSelect={setSelectedColor} />
        <VariantSelector label="Size / 规格" options={sizes} selected={selectedSize} onSelect={setSelectedSize} />
        {!isOutOfStock && (
          <div className="quantity-wrapper">
            <div className="quantity-label">Quantity / 数量</div>
            <div className="quantity-control">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span>{quantity}</span>
              <button disabled={quantity >= (currentVariant?.stock || 0)} onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>
        )}
        <div className="action-buttons">
          <button
            className="btn-add-cart"
            disabled={isOutOfStock || addingToCart}
            onClick={handleAddToCart}
          >
            {addingToCart ? 'Adding... / 加入中...' : 'Add to Cart / 加入购物车'}
          </button>
          <button className="btn-buy-now" disabled={isOutOfStock}>Buy Now / 立即购买</button>
        </div>
        {cartCount > 0 && (
          <div className="cart-count">Cart Items: / 购物车已有 <strong>{cartCount}</strong> items / 件商品</div>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;
