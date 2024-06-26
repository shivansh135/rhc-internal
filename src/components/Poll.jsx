const Poll = () => {
  const options = [
    { label: "Option One", value: "option1" },
    { label: "Option Two", value: "option2" },
    { label: "Option Three", value: "option3" },
  ];

  return (
    <div className="w-[480px] min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#50917F] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]  mb-[30px]">
        <h1 className="text-[20px]">Poll</h1>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-md"
          href=""
        >
          View All
        </a>
      </div>

      <div className="w-full px-[30px]">
        <p className="mb-[30px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type?
        </p>

        <div className="flex flex-col gap-[16px]">
          {options.map((option) => (
            <div
              key={option.value}
              className="w-full h-[62px] px-[33px] border-[1px] border-[#50917F] rounded-lg flex items-center gap-[16px]"
            >
              <input
                className="hidden custom-radio"
                type="radio"
                id={option.value}
                name="options"
                value={option.value}
              />
              <span className="w-[33.31px] h-[33px] border-[1px] border-[#888888] rounded-full flex items-center justify-center custom-radio-circle">
                <span className="w-3 h-3 bg-[#3B729C] rounded-full opacity-0"></span>
              </span>

              <label className="text-[16px]" htmlFor={option.value}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <h1 className="h-[48px] bg-[#50917F] my-[30px] flex justify-center items-center rounded-lg text-white">Vote</h1>
      </div>
    </div>
  );
};

export default Poll;
