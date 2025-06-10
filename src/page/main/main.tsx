import NavItems from "../../components/navItems";
import LoadMore from "../../components/loadMore";
import SortBlock from "../../components/sortBlock";
import SoftwareProducts from "../../components/softwareProducts";
const Main = (): JSX.Element => {
  return (
    <div className="w-full max-w-[575px] md:max-w-[1024px] lg:max-w-[1280px] mx-auto p-2 mt-2 xs:mt-3 xs:p-5">
      <div className="w-full bg-white mb-5">
        <NavItems />
        <SortBlock />
        <SoftwareProducts />
        <LoadMore />
      </div>
    </div>
  );
};

export default Main;
