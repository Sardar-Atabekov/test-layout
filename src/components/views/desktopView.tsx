import React from "react";
import { Badge } from "../ui/badge";
import type { ViewProps } from "./types";
import StarIcon from "../../assets/star.svg";
import vectorIcon from "../../assets/vector.svg";
import CheckCircleIcon from "../../assets/circle-check.svg";

export const DesktopView: React.FC<ViewProps> = ({ product, renderName }) => {
  function isString(value: unknown): value is string {
    return typeof value === "string" && value.length > 0;
  }

  const data: unknown = "";
  if (isString(data)) {
    console.log(data.toUpperCase()); // TypeScript ошибка?
  }

  console.log(1);
  Promise.resolve().then(() => console.log(2));
  setTimeout(() => console.log(3), 0);
  queueMicrotask(() => console.log(4));
  console.log(5);
  return (
    <div
      className="mb-[10px] flex flex-col border border-gray-200 bg-white p-4 px-5 rounded-xl"
      style={{ backgroundColor: "#F8F9FB" }}
    >
      <div className="flex mb-5">
        <div className="flex items-start mr-4">
          <div
            className="relative flex items-center justify-center rounded-[5px] bg-white"
            style={{ width: "90px", height: "95px" }}
          >
            <img
              src={product.iconSrc}
              alt="Icon"
              style={{ width: "90px", height: "90px" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <h3 className="font-semibold text-xl text-[#333333] leading-[30px]">
              <span>{renderName}</span>
              <img
                className="inline w-3.5 h-[15px] mb-[2px] ml-[12px]"
                alt="Verified"
                src={vectorIcon}
                style={{ width: "20px", height: "20px" }}
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

          <div className="flex items-center gap-2 text-sm mt-1">
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
          "Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others"}
      </p>
    </div>
  );
};
