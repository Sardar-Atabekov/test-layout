import JSIcon from "./../assets/js.png";
import lockSmallIcon from "./../assets/lock.svg";
const NavItems = (): JSX.Element => {
  const navItems = [
    {
      id: 1,
      title: "Review Puppeteer plugin to solve reCAPTCHAs automatically",
      iconSrc: lockSmallIcon,
      width: "40px",
      height: "40px",
    },
    {
      id: 2,
      title: "Review Puppeteer plugin",
      iconSrc: JSIcon,
      width: "40px",
      height: "40px",
    },
  ];

  return (
    <div className="flex flex-wrap gap-5 mb-5">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="flex-none w-full sm:w-[calc(50%-10px)]  flex items-center p-2.5 rounded-[10px] bg-[#D4EEFF]"
        >
          <div
            className="bg-white rounded-[5px] flex items-center justify-center shrink-0"
            style={{
              width: item.width || "40px",
              height: item.height || "40px",
            }}
          >
            <img
              className="relative"
              style={{ width: item.width, height: item.height }}
              alt="Icon"
              src={item.iconSrc}
            />
          </div>
          <div className="ml-2">
            <div className="font-semibold text-[#333333] leading-snug">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
