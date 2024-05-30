const UpcomingEvents = ({ events }) => {
  if (!events || events.length === 0) {
    return <div>No upcoming events available.</div>;
  }

  const normalizeDateTime = (dateTimeString) => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(dateTimeString).toLocaleString("default", {
      timeStyle: "short",
      timeZone: tz,
    });
  };

  return (
    <div className="rounded-[8px] overflow-hidden w-full">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
          Upcoming Events
        </h1>

        <a
          href=""
          className="text-[14px] font-light rounded-[4px] px-[10px] border-[1px]"
        >
          View All
        </a>
      </div>
      {events.value.map((event, index) => (
        <div key={index} className="flex p-[20px] gap-[20px] items-start content-start self-stretch flex-wrap border-b-[1px] border-b-[#888888]">
          <div className="w-[72px] h-[72px] bg-slate-300"> </div>
          <div>
            <h1 className="text-[16px] font-[400px]">{event.Title}</h1>
            <div className="flex gap-[10px] items-center">
              <div className="w-[16px] h-[16px] shrink-0 bg-slate-300"></div>
              <p className="text-[12px] font-[400px]">{normalizeDateTime(event.Start_time)} - {normalizeDateTime(event.end_time)}</p>
            </div>
            <div className="flex gap-[10px] items-center">
              <div className="w-[16px] h-[16px] shrink-0 bg-slate-300"></div>
              <p className="text-[12px] font-[400px]">
                {event.event_location_en}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

//         <div className="flex p-[20px] gap-[20px] items-start content-start self-stretch flex-wrap border-b-[1px] border-b-[#888888]">
//           <div className="w-[72px] h-[72px] bg-slate-300"> </div>

//           <div>
//             <h1 className="text-[16px] font-[400px]">Event Title Here</h1>
//             <div className="flex gap-[10px] items-center">
//               <div className="w-[16px] h-[16px] shrink-0 bg-slate-300"></div>
//               <p className="text-[12px] font-[400px]">11:00 AM - 2:00 PM</p>
//             </div>
//             <div className="flex gap-[10px] items-center">
//               <div className="w-[16px] h-[16px] shrink-0 bg-slate-300"></div>
//               <p className="text-[12px] font-[400px]">Full Address Comes Here</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   );
// };

export default UpcomingEvents;
