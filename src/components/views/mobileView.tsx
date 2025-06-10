import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import type { ViewProps } from "./types";
import StarIcon from "../../assets/star.svg";
import CheckCircleIcon from "../../assets/circle-check.svg";

export const MobileView: React.FC<ViewProps> = ({ product, renderName }) => {
  return (
    <div className="mb-[10px]" style={{ backgroundColor: "#F8F9FB" }}>
      <Card className="bg-[rgb(248,249,251)] border-[#e1eaf6] rounded-[10px]">
        <div className="p-3 xs:p-[20px] flex flex-col">
          <div className="flex">
            <div className="flex items-start pr-4">
              <div className="relative flex items-center justify-center rounded-[5px] bg-white">
                <img
                  src={product.iconSrc}
                  alt="Icon"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
            </div>
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
  );
};
