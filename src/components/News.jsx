
const News = ({data}) => {
  console.log(data);
  if(!data || data.length === 0) {
    return null
  }
  return (
    <div className="w-[480px] min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#C2AB80] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white]  mb-[30px]">
        <h1 className="text-[20px]">Corporate News</h1>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-md"
          href=""
        >
          View All
        </a>
      </div>

      <div className="flex flex-col gap-[20px]">
      {data.map((item, index) => (
          <div key={index} className='flex flex-wrap gap-[30px] items-center px-[30px] border-b-[1px] pb-[26.5px]'>
            <img src={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}`} className='w-[106px] h-[70px] bg-slate-300'></img>

            <div>
              <h1 className='text-[16px] text-[#444444]'>{item.fields.Title}</h1>
              <p className='text-[13px] font-light'>{item.fields.Preview_en}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default News
