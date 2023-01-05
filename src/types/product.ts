import { Dispatch } from 'react';

export type CategoryType = 'rau-cu' | 'thit-ca' | 'trai-cay' | 'do-kho';

export type ImagesType = {
  url: string;
  asset_id: string;
  public_id: string;
};

type RatingType = {
  star: number;
  comment: string;
  postedby: string;
};

export type ProductType = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  price: number;
  promotionalPrice: number;
  category: string;
  brand: string;
  quantity: number;
  sold: number;
  images: ImagesType[];
  ratings: RatingType[];
  totalratings: number;
  importWarehouseDate: Date;
  expirationDate: Date;
  createdAt: Date;
  isHot: boolean;
  isNew: boolean;
  isSelling: boolean;
};

export type ListTabProductsType = {
  id: number;
  name: string;
  category?: string;
};

export type UploadImgType = {
  asset_id: string;
  public_id: string;
  url: string;
};

export interface UploadState {
  data: UploadImgType[];
  isLoading: boolean;
}

export interface ReduxType {
  getState: any;
  dispatch: Dispatch<any>;
  rejectWithValue: any;
}
