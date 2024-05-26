
const QuickLinks = () => {
  return (
    <div className="w-full">
      <h1>Quick Links</h1>
      <div className="w-full flex gap-[20px] flex-wrap mt-[20px]">
        <div className="w-[90px] h-[90px] border-[1.5px] py-[5px] px-[8px] border-[#3B729C] rounded-lg flex flex-col justify-center gap-[12px] items-center">
          <img src="/icons/icon1.svg" alt="" />
          <h1 className="text-[13px] font-light">ERP</h1>
        </div>

        <div className="w-[90px] h-[90px] border-[1.5px] py-[5px] px-[8px] border-[#3B729C] rounded-lg flex flex-col justify-center gap-[12px] items-center">
          <img src="/icons/icon1.svg" alt="" />
          <h1 className="text-[13px] font-light">ERP</h1>
        </div>
        <div className="w-[90px] h-[90px] border-[1.5px] py-[5px] px-[8px] border-[#3B729C] rounded-lg flex flex-col justify-center gap-[12px] items-center">
          <img src="/icons/icon1.svg" alt="" />
          <h1 className="text-[13px] font-light">ERP</h1>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
