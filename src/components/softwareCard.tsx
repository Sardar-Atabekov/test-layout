import React from "react";
import { MobileView } from "./views/mobileView";
import { DesktopView } from "./views/desktopView";
import { useMediaQuery } from "react-responsive";
import type { SoftwareCardProps } from "./views/types";

export const SoftwareCard: React.FC<SoftwareCardProps> = ({ product }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

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

  return isMobile ? (
    <MobileView product={product} renderName={renderName} content={Content} />
  ) : (
    <DesktopView product={product} renderName={renderName} content={Content} />
  );
};
