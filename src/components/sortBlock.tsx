import { Select, SelectTrigger, SelectValue } from "../components/ui/select";


const SortBlock = (): JSX.Element => {

  return (
    <div className="mt-[20px] mb-[10px]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center justify-between sm:justify-start">
          <h2 className="font-semibold text-2xl text-[#333333] leading-[34px] whitespace-nowrap">
            Software
          </h2>

          <div className="w-10 h-10 bg-[#f8f9fb] rounded-[3px] flex items-center justify-center shrink-0 sm:hidden mr-2">
            <img
              className="w-[3px] h-4"
              alt="Filter"
              src="https://c.animaapp.com/mbm2yy36GwTvxk/img/vector-2.svg"
            />
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[250px] h-10 border border-[#e1eaf6] rounded-[5px] px-[9px] py-1.5 text-sm text-[#333333] font-normal">
              <SelectValue placeholder="Sort by: Most relevant" />
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SortBlock;
