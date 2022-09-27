import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import HelpDesk from './HelpDesk';
import JoinWIthUs from './JoinWIthUs';
import OurPreviousWork from './OurPreviousWork';
import OurTeam from './OurTeam';
import OurWorks from './OurWorks';
import RecentDonetor from './RecentDonetor';
import UpcomingWork from './UpcomingWork';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurWorks/>
            <OurPreviousWork/>
            <RecentDonetor/>
            <HelpDesk/>
            <AboutUs/>
            <UpcomingWork/>
            <JoinWIthUs/>
            <OurTeam/>
        </div>
    );
};

export default Home;