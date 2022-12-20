export type CategoryType = 'rau-cu' | 'thit-ca' | 'trai-cay' | 'do-kho';

export interface ProductType {
  id: number;
  name: string;
  isHot: boolean;
  isNew: boolean;
  rating: number;
  image: string;
  category: CategoryType;
  to: string;
  desc: string;
  price: number;
  discount?: number;
  quantity: number;
  sold: number;
}

export type ListTabProductsType = {
  category: string;
  to: string;
  id: number;
  name: string;
};
