import JSIcon from "./../assets/js.png";
import Logo from "./../assets/logo.png";
import lockIcon from "./../assets/lock.png";
import { SoftwareCard } from "./softwareCard";

const softwareProducts = [
  {
    id: 1,
    name: "2Captcha solver",
    subTitle: "This software is designed to work with any site",
    isOfficial: true,
    rating: 4.6,
    reviews: 456,
    price: "Free",
    iconSrc: lockIcon,
    iconWidth: "60px",
    iconHeight: "60px",
  },
  {
    id: 2,
    name: "Puppeteer plugin to solve reCAPTCHAs automatically",
    subTitle: "This software is designed to work with any site",
    isOfficial: true,
    rating: 4.6,
    reviews: 456,
    price: "$67",
    iconSrc: Logo,
    isMultiline: true,
    iconWidth: "60px",
    iconHeight: "60px",
    description:
      "Extension for the Google Chrome browser that automatically recognizes captchas such as ReCaptcha V2, V3, GeeTest, Arkose Labs FunCaptcha, Human Captcha and others.",
  },
  {
    id: 3,
    name: "2captcha-javascript",
    subTitle: "This software is designed to work with any site",
    isOfficial: false,
    rating: 4.6,
    reviews: 456,
    price: "$67",
    iconSrc: JSIcon,
    iconBg: "#f7df1d",
    iconWidth: "60px",
    iconHeight: "60px",
    mb: true,
  },
  {
    id: 4,
    name: "2captcha-javascript",
    subTitle: "This software is designed to work with any site",
    isOfficial: true,
    rating: 4.6,
    reviews: 456,
    price: "$67",
    iconSrc: JSIcon,
    iconBg: "#f7df1d",
    iconWidth: "60px",
    iconHeight: "60px",
    mb: true,
  },
];

const SoftwareProducts = () => {
  return (
    <div className="mt-[10px]">
      {softwareProducts.map((product) => (
        <SoftwareCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SoftwareProducts;