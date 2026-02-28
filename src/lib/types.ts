export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  tags: string[];
  images: string[];
  sizes: number[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
}
