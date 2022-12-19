export type CategoryType = 'rau-cu' | 'thit-ca' | 'trai-cay' | 'do-kho';

export interface ProductType {
  id: number;
  name: string;
  isHot: boolean;
  isNew: boolean;
  rating: number;
  image: string;
  category: CategoryType;
  to: '/';
  desc: string;
  price: number;
  discount?: number;
}
