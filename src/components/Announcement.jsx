
const Announcement = ({announcements}) => {


  if (!announcements || !announcements.value || announcements.value.length === 0 ) {
    return <div>No announcement available.</div>; 
  }

  const { Title, preview_en } = announcements.value[0].fields;
  console.log('Announcement-Tile:', Title);
  console.log('Announcement-Preview:', preview_en);

  return (
    <div className="w-full justify-center bg-[#50917F] p-[20px] flex flex-wrap rounded-lg gap-[30px] items-center">
      <div className="w-[460px] h-[320px] bg-slate-300 rounded-lg overflow-hidden"></div>
      <div className="w-[401px] text-white">
        <h1 className="text-[24px] font-light mb-[10px]">{Title}</h1>
        <p className="text-[16px] font-light mb-[30px]">{preview_en}</p>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-md"
          href=""
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default Announcement
