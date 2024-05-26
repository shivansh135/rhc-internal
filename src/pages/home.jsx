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

const Home = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);

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
          console.log(response.accessToken)
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect(request);
          } else {
            console.error(error);
          }
        }
      }
    };

    acquireToken();
  }, [instance, accounts]);

  return (
    <div className="px-[30px] bg-[#F4F8FB] w-full">
      <div>
      <h1>Home</h1>
      {accessToken ? (
        <div>
          <h2>Access Token:</h2>
          <p>{accessToken}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <div className="flex gap-[30px]">
        <div className="w-[66vw]">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <Banner />
          </div>

          <div className="flex gap-[60px] mt-[25px]">
            <Calender />

            <Planner />
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
