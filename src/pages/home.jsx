import React from 'react';
import Announcement from '../components/Announcement';
import Banner from '../components/Banner';
import Calender from '../components/Calender';
import EmployeeDirectory from '../components/EmployeeDirectory';
import EventName from '../components/EventName';
import Gallery from '../components/Gallery';
import KnowledgeBase from '../components/KnowledgeBase';
import NewEmployee from '../components/NewEmployee';
import News from '../components/News';
import Planner from '../components/Planner';
import Poll from '../components/Poll';
import QuickLinks from '../components/QuickLinks';
import UpcomingEvents from '../components/UpcomingEvents';
import { useMsal } from '@azure/msal-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { loginRequest } from '../authConfig';
import { InteractionRequiredAuthError } from '@azure/msal-browser';

const Home = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [plannerTasks, setPlannerTasks] = useState([]);
  console.log(accounts)
  useEffect(() => {
    const acquireToken = async () => {
      if (accounts.length > 0) {
        const request = {
          ...loginRequest,
          account: accounts[0],
        };

        try {
          const response = await instance.acquireTokenSilent(request);
          setAccessToken(response.accessToken);
          fetchCalendarEvents(response.accessToken);
          fetchPlannerTasks(response.accessToken);
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect(request);
          } else {
            console.error(error);
          }
        }
      }
    };

    const fetchCalendarEvents = async (token) => {
      try {
        // Get the current date and set time to midnight to include all of today
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const isoDate = now.toISOString();
    
        // Fetch events starting from today or later
        let calendar = await fetch(`https://graph.microsoft.com/v1.0/me/calendar/events?$filter=start/dateTime ge '${isoDate}'`, {
          headers: { Authorization: "Bearer " + token, Prefer: 'outlook.timezone="Asia/Kolkata"' },
        });
    
        let cal_json = await calendar.json();
        console.log('org_cal', cal_json);
    
        const tz = "Asia/Kolkata"; // Using the correct IANA time zone identifier
    
        let cal_eventsjson = cal_json.value.map((events) => ({
          name: events.subject,
          month: new Date(events.start.dateTime).toLocaleString("default", { month: "short" }),
          day: new Date(events.start.dateTime).getDate(),
          starttime: new Date(events.start.dateTime).toLocaleString("default", {
            timeStyle: "short",
            timeZone: tz,
          }),
          endtime: new Date(events.end.dateTime).toLocaleString("default", {
            timeStyle: "short",
            timeZone: tz,
          }),
        }));
    
        setCalendarEvents(cal_eventsjson);
        console.log('cal_eventsjson', cal_eventsjson);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };
    
    

    const fetchPlannerTasks = async (token) => {
      try {
        let tasks_planner = await fetch("https://graph.microsoft.com/v1.0/me/planner/tasks/", {
          headers: { Authorization: "Bearer " + token },
        });
        let tasks_json = await tasks_planner.json();
        let tasks_filter_json = tasks_json.value.filter((obj) => !obj.completedBy);
        let tasks_assigned_json = tasks_filter_json.map((tasks) => ({
          title: tasks.title,
          id: tasks.id,
          url: `https://tasks.office.com/arhc.com.sa/Home/Task/${tasks.id}`,
          dueDate: new Date(tasks.dueDateTime).getFullYear() !== 1970
            ? `${new Date(tasks.dueDateTime).getDate()}/${new Date(tasks.dueDateTime).getMonth() + 1}/${new Date(tasks.dueDateTime).getFullYear()}`
            : "No Due Date",
        }));
        setPlannerTasks(tasks_assigned_json);
        console.log('tasks_assigned_json',tasks_assigned_json)
      } catch (error) {
        console.error("Error fetching planner tasks:", error);
      }
    };

    acquireToken();
  }, [instance, accounts]);

  return (
    <div className="px-[30px] bg-[#F4F8FB] w-full">

      <div className="flex gap-[30px]">
        <div className="w-[66vw]">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <Banner />
          </div>

          <div className="flex gap-[60px] mt-[25px]">
            <Calender events={calendarEvents} />
            <Planner tasks={plannerTasks} />
          </div>

          <div className="mt-[30px]">
            <Announcement />
          </div>

          <div className="flex gap-[30px] justify-between mt-[25px]">
            <Poll />
            <News />
          </div>

          <div className="mt-[30px]">
            <EmployeeDirectory />
          </div>
        </div>

        <div className="shadow-md w-[33vw]">
          <div className="pb-[30px] px-[30px]">
            <QuickLinks />
          </div>
          <hr />
          <div className="mt-[21px] mb-[32px] px-[25px]">
            <EventName />
          </div>
          <hr />
          <div className="px-[30px] mt-[30px]">
            <UpcomingEvents />
          </div>
          <hr />
          <div className="px-[30px] mt-[30px]">
            <NewEmployee />
          </div>
          <hr />
          <div className="px-[30px] mt-[30px]">
            <KnowledgeBase />
          </div>
        </div>
      </div>

      <div className="w-full rounded-lg overflow-hidden mt-[65px]">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
