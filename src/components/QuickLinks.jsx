const QuickLinks = () => {
  const links = [
    { src: "/icons/ERP.svg", alt: "ERP Icon", label: "ERP" },
    { src: "/icons/RealEstate.svg", alt: "Real Estate", label: "Real Estate" },
    { src: "/icons/Help.svg", alt: "Help Desk", label: "Help Desk" },
    // { src: "/icons/SelfService.svg", alt: "Employee self-service", label: "Employee self-service portal" },
    { src: "/icons/DMS.svg", alt: "DMS", label: "DMS" },
    { src: "/icons/MaidanIcon.svg", alt: "Midan", label: "Midan" },
    // { src: "/icons/icon1.svg", alt: "Book rooms and meetings", label: "Book rooms and meetings" },
    { src: "/icons/Training.svg", alt: "Training", label: "Training" },
    { src: "/icons/Shamil.svg", alt: "Shamil", label: "Shamil" },
  ];
  return (
    <div className="w-full bg-white">
      <h1>Quick Links</h1>
      <div className="w-full flex gap-[20px] flex-wrap mt-[20px]">
        {links.map((link, index) => (
          <div
            key={index}
            className="w-[90px] h-[90px] border-[1.5px] py-[5px] px-[8px] border-[#3B729C] rounded-lg flex flex-col justify-center gap-[12px] items-center"
          >
            <img src={link.src} alt={link.alt} />
            <h1 className="text-[13px] font-light">{link.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
