// SoftwareCard.tsx
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import StarIcon from "./../assets/star.svg";
import CheckCircleIcon from "./../assets/circle-check.svg";

interface SoftwareProduct {
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

export const SoftwareCard = ({ product }: { product: SoftwareProduct }) => {
  const renderName = product.isMultiline
    ? product.name.split(" ").slice(0, 3).join(" ") +
      " " +
      product.name.split(" ").slice(3).join(" ")
    : product.name;

  const iconStyle = {
    backgroundColor: product.iconBg || "transparent",
    width: product.iconWidth || "60px",
    height: product.iconHeight || "60px",
  };

  const imgStyle = {
    width: product.iconWidth === "33px" ? "16px" : product.iconWidth || "60px",
    height:
      product.iconHeight === "33px" ? "11px" : product.iconHeight || "60px",
  };

  const Content = (
    <div className="flex items-start pr-4">
      <div
        className="relative flex items-center justify-center rounded-[5px] bg-white"
        style={iconStyle}
      >
        <img src={product.iconSrc} alt="Icon" style={imgStyle} />
      </div>
    </div>
  );

  return product.mb ? (
    <div className="mb-[10px]">
      <Card className="bg-[#f8f9fb] border-[#e1eaf6] rounded-[10px]">
        <div className="p-[20px] flex flex-col">
          <div className="flex items-center">
            {Content}
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-[#333333] leading-[30px]">
                <span>{renderName}</span>
                <img
                  className="inline w-3.5 h-[15px] mb-[2px] ml-[12px]"
                  alt="Verified"
                  src="https://c.animaapp.com/mbm2yy36GwTvxk/img/group-78339.png"
                />
              </h3>
              {product.isOfficial && (
                <Badge className="mt-2 bg-[#00a1b3] text-white rounded-[15px] px-4 h-6 font-normal">
                  <img
                    className="w-[11px] h-4 mr-1.5"
                    alt="Official"
                    src="https://c.animaapp.com/mbm2yy36GwTvxk/img/vector.svg"
                  />
                  Official software
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center mt-4">
            <img src={CheckCircleIcon} className="w-4 h-4 mr-2.5" />
            <span className="text-sm text-[#333333] font-normal">
              {product.subTitle}
            </span>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              <div className="bg-[#e1eaf6] rounded-xl h-6 px-2.5 flex items-center mr-2.5">
                <span className="font-semibold text-sm text-[#333333]">
                  {product.rating}
                </span>
                <img src={StarIcon} className="w-3.5 h-3.5 ml-1" />
              </div>
              <span className="text-sm text-[#5b6a7d] font-normal">
                {product.reviews} Reviews
              </span>
            </div>
            <span className="font-semibold text-xl text-[#00a1b3]">
              {product.price}
            </span>
          </div>
        </div>
      </Card>
    </div>
  ) : (
    <div className="mb-[10px] flex flex-col border border-gray-200 bg-white p-4 px-5 shadow rounded-xl">
      <div className="flex mb-5">
        {Content}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h3 className="font-semibold text-xl text-[#333333] leading-[30px]">
              <span>{renderName}</span>
              <img
                className="inline w-3.5 h-[15px] mb-[2px] ml-[12px]"
                alt="Verified"
                src="https://c.animaapp.com/mbm2yy36GwTvxk/img/group-78339.png"
              />
            </h3>
            <span className="font-semibold text-xl text-[#00a1b3]">
              {product.price}
            </span>
          </div>

          <div className="flex items-center">
            <img src={CheckCircleIcon} className="w-4 h-4 mr-2.5" />
            <span className="text-sm text-[#333333] font-normal">
              {product.subTitle}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="bg-[#e1eaf6] rounded-xl h-6 px-2.5 flex items-center">
              <span className="font-semibold text-sm text-[#333333]">
                {product.rating}
              </span>
              <img src={StarIcon} className="w-3.5 h-3.5 ml-1" />
            </div>
            <span className="text-sm text-[#5b6a7d] font-normal">
              {product.reviews} Reviews
            </span>
            {product.isOfficial && (
              <Badge className="text-white rounded-[15px] px-4 h-6 font-normal bg-[#00a1b3] py-0.5 text-xs">
                <img
                  className="w-[11px] h-4 mr-1.5"
                  alt="Official"
                  src="https://c.animaapp.com/mbm2yy36GwTvxk/img/vector.svg"
                />
                Official software
              </Badge>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        {product.description ||
          "This software is designed to work with any site."}
      </p>
    </div>
  );
};
