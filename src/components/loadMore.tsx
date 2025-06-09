import { ChevronDownIcon } from "lucide-react";
import { Button } from "../components/ui/button";

const LoadMore = (): JSX.Element => {
  return (
    <div className="mt-[10px]">
      <Button
        variant="outline"
        className="w-full h-9 rounded-[5px] border-[#e1eaf6] text-[#5b6a7d] font-normal text-sm"
      >
        Load more
        <ChevronDownIcon className="w-2.5 h-1.5 ml-2" />
      </Button>
    </div>
  );
};

export default LoadMore;
