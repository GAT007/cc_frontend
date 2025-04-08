import React from "react";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryNavbar from "./PrimaryNavbar.jsx"
import SecondaryNavbar from "./SecondaryNavbar.jsx";
import TertiaryNavbar from "./TertiaryNavbar.jsx";
import NetworkComponent from './NetworkComponent';
import ResourcesComponent from './ResourcesComponent';
import AboutComponent from './AboutComponent';
import HomeDetailsComponent from './HomeDetails.jsx'
import CommunityPartners from './Network/CommunityPartners.jsx'
import Researchers from './Network/Researchers.jsx'
import CommunityProjects from './Network/CommunityProjects.jsx'
import OfficeEngagement from './Network/OfficeEngagement.jsx'


function HomeComponent() {
    const navigate = useNavigate();
    return (
        <div>
            {/* Primary Navbar */}
            <PrimaryNavbar/>

            {/* Secondary Navbar - Visible on All Pages */}
            <SecondaryNavbar/>

            {/* Tertiary Navbar - Changes Based on Route */}
            <Routes>
                <Route path="/network/*" element={<TertiaryNavbar section="network"/>}/>
                <Route path="/resources/*" element={<TertiaryNavbar section="resources"/>}/>
                <Route path="/about/*" element={<TertiaryNavbar section="about"/>}/>
            </Routes>
            {/* Main Content Based on Route */}
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HomeDetailsComponent/>}/>

                    <Route path="/network" element={<Navigate to="/network/community-partners" replace/>}/>
                    <Route path="network/community-partners" element={<CommunityPartners/>}/>
                    <Route path="network/researchers" element={<Researchers/>}/>
                    <Route path="network/community-engaged-projects" element={<CommunityProjects/>}/>
                    <Route path="network/office-of-community-engagement" element={<OfficeEngagement/>}/>

                    <Route path="/resources" element={<ResourcesComponent/>}/>

                    <Route path="/about" element={<AboutComponent/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default HomeComponent;
