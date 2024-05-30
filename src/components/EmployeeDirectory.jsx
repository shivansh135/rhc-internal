const EmployeeDirectory = ({ employees }) => {
  return (
    <div className="w-full min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#50917F] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]  mb-[30px]">
        <h1 className="text-[20px]">Employee Directory</h1>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-md"
          href=""
        >
          View All
        </a>
      </div>

      <div className="w-full flex flex-col items-start gap-[20px]">
        <div className="flex items-center bg-white border border-[#50917F] rounded-lg p-2 w-[92%] mx-auto">
          <div className="flex items-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#888888] ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5.222-5.222"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search For Employee"
            className="flex-grow px-4 py-2 "
          />
        </div>
        <div className="w-full  px-[15px]">
        {employees.map((employee, index) => (
          <div key={index} className="flex gap-[20px] mt-[20px] px-[30px] border-b-[1px] w-full">
            <div className="w-[80px] h-[80px] bg-slate-300 rounded-lg">
            <img
                  src={`https://riyadhholding.sharepoint.com/sites/Shamil/${employee.fields.photo_name}`}
                  alt={employee.fields.Title}
                  className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="text-[#444444] pb-[6px]">
              <h1 className="text-[16px]">{employee.fields.employee}</h1>
              <div className="text-[14px] font-light">
                <p>Job Title: {employee.fields.Title}</p>
                <p>Phone: {employee.fields.number}</p>
                <p>Email: {employee.fields.email}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  </div>
  );
};

export default EmployeeDirectory;
