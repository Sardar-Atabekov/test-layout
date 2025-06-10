export interface SoftwareProduct {
  id: number;
  name: string;
  subTitle: string;
  isOfficial: boolean;
  rating: number;
  reviews: number;
  price: string;
  iconSrc: string;
  iconBg?: string;
  iconWidth?: string;
  iconHeight?: string;
  isMultiline?: boolean;
  mb?: boolean;
  description?: string;
}

export interface ViewProps {
  product: SoftwareProduct;
  renderName: string;
}

export interface SoftwareCardProps {
  product: SoftwareProduct;
}
