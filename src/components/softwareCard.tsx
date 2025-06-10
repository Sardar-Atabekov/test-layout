import React from "react";
import { MobileView } from "./views/mobileView";
import { useMediaQuery } from "react-responsive";
import { DesktopView } from "./views/desktopView";
import type { SoftwareCardProps } from "./views/types";

export const SoftwareCard: React.FC<SoftwareCardProps> = ({ product }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const renderName = product.isMultiline
    ? product.name.split(" ").slice(0, 3).join(" ") +
      " " +
      product.name.split(" ").slice(3).join(" ")
    : product.name;

  return isMobile ? (
    <MobileView product={product} renderName={renderName} />
  ) : (
    <DesktopView product={product} renderName={renderName} />
  );
};
