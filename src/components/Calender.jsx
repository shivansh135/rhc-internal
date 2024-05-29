import React from 'react';

const Calendar = ({ events }) => {
  const normalizeDate = (date) => {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
  };

  const today = new Date();
  const todayDate = normalizeDate(today).getTime();

  const getCurrentWeekRange = () => {
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay());
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    return [normalizeDate(firstDayOfWeek), normalizeDate(lastDayOfWeek)];
  };

  const [currentWeekStart, currentWeekEnd] = getCurrentWeekRange();
  const isToday = (date) => {
    const eventDate = normalizeDate(new Date(date)).getTime();
    return eventDate === todayDate;
  };

  const isThisWeek = (date) => {
    const eventDate = normalizeDate(new Date(date)).getTime();
    return eventDate >= currentWeekStart.getTime() && eventDate <= currentWeekEnd.getTime() && !isToday(date);
  };
  const renderEvents = (events, title) => (
    <div className="px-[30px] my-[20px]">
      <h1 className="text-[16px] pb-[10px]">{title}</h1>
      <div className="flex flex-col gap-[10px]">
        {events.map((event, index) => (
          <div key={index} className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
            <div className="px-[25px] border-r-[1px] border-r-[#50917F] flex flex-col justify-center flex-grow-0">
              <h1 className="text-[24px] font-medium">{new Date(event.starttime).getDate()}</h1>
              <h1 className="text-[12px] font-medium">{new Date(event.starttime).toLocaleString('default', { month: 'short' })}</h1>
            </div>
            <div className="px-[30px] py-[12px] flex-1 flex items-center">
              <div>
                <h1 className="text-[16px] w-[100%]">{event.name}</h1>
                <h2 className="text-[14px] text-[#888888]">
                  {event.starttime} - {event.endtime}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // const todayEvents = events.filter(event => new Date(event.starttime).getDate() === today);
  // const weekEvents = events.filter(event => new Date(event.starttime).getDate() !== today);
  const todayEvents = events.filter(event => isToday(event.starttime));
  const weekEvents = events.filter(event => isThisWeek(event.starttime));


  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#3B729C] w-full flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="text-[20px]">Calendar</h1>
        <a className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-md" href="">
          View All
        </a>
      </div>
      <div>
        {renderEvents(todayEvents, 'Today')}
        <hr />
        {renderEvents(weekEvents, 'This Week')}
      </div>
    </div>
  );
};

export default Calendar;
