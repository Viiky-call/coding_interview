	export interface Variant {
	  skuId: string;
	  color: string;
	  size: string;
	  price: number;
	  stock: number;
	}
	export interface Product {
	  productId: string;
	  name: string;
	  description: string;
	  images: string[];
	  variants: Variant[];
	}
	export interface CartPayload {
	  productId: string;
	  skuId: string;
	  quantity: number;
	}
	export interface CartResponse {
	  success: boolean;
	  cartCount?: number;
	  message?: string;
	}