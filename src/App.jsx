import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/signUp";
import StudentSignUp from "./Pages/student/StudentSignUp";
import FacultySignUp from "./Pages/faculty/FacultySignUp";
import CompanySignUp from "./Pages/company/CompanySignUp";
import StudentDashboard from "./Pages/student/StudentDashboard";
import StudentProfile from "./Pages/student/StudentProfile";
import MentorshipListings from "./Pages/student/MentorshipListings";
import InternshipListings from "./Pages/student/InternshipListings";
import EventListings from "./Pages/student/EventListings";
import Resources from "./Pages/student/Resources";
import DiscussionForum from "./Pages/student/DiscussionForum";
import AlumniSignUp from "./Pages/alumni/AlumniSignUp";
import AlumniDashboard from "./Pages/alumni/AlumniDashboard";
import AlumniJobListings from "./Pages/alumni/AlumniJobListings";
import AlumniDiscussionForum from "./Pages/alumni/ AlumniDiscussionForum";
import CreateDiscussion from "./Pages/alumni/CreateDiscussion";
import ViewDiscussion from "./Pages/alumni/ViewDiscussion";
import AlumniEvents from "./Pages/alumni/AlumniEvents";
import AlumniResources from "./Pages/alumni/AlumniResources";
import AlumniProfile from "./Pages/alumni/AlumniProfile";
import AlumniNotifications from "./Pages/alumni/AlumniNotifications";
import FacultyDashboard from "./Pages/faculty/FacultyDashboard";
import FacultyMentorship from "./Pages/faculty/FacultyMentorship";
import FacultyEvents from "./Pages/faculty/FacultyEvents";
import FacultyResources from "./Pages/faculty/ FacultyResources";
import FacultyDiscussions from "./Pages/faculty/FacultyDiscussions";
import FacultyCreateDiscussion from "./Pages/faculty/CreateDiscussion";
import FacultyNotifications from "./Pages/faculty/ FacultyNotifications";
import FacultyProfile from "./Pages/faculty/FacultyProfile";
import CompanyDashboard from "./Pages/company/CompanyDashboard";
import CompanyProfile from "./Pages/company/CompanyProfile";
import PostJob from "./Pages/company/PostJob";
import ViewApplications from "./Pages/company/ViewApplications";
import PostInternship from "./Pages/company/PostInternship";
import CompanyNotifications from "./Pages/company/CompanyNotifications";
import CreateEvent from "./Pages/company/ CreateEvent";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import ManageUsers from "./Pages/Admin/ManageUsers";
import ManageJobs from "./Pages/Admin/ManageJobs";
import ManageInternships from "./Pages/Admin/ManageInternships";
import ManageEvents from "./Pages/Admin/ManageEvents";
import ManageDiscussions from "./Pages/Admin/ManageDiscussions";
import ManageResources from "./Pages/Admin/ManageResources";
import Profile from "./Pages/Admin/Profile";
import Status from "./Pages/Admin/Status";
const App = ()=>{
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup/student" element={<StudentSignUp/>} />
            <Route path="/signup/alumni" element={<AlumniSignUp/>} />
            <Route path="/signup/faculty" element={<FacultySignUp/>} />
            <Route path="/signup/company" element={<CompanySignUp/>} />
            <Route path="/dashboard-student" element={<StudentDashboard/>} />
            <Route path="/student/profile" element={<StudentProfile/>} />
            <Route path="/student/mentorship" element={<MentorshipListings/>}/>
            <Route path="/student/internships" element={<InternshipListings/>} />
            <Route path="/student/events" element={<EventListings/>} />
            <Route path="/student/resources" element={<Resources/>} />
            <Route path="/student/discussions" element={<DiscussionForum/>} />
            <Route path="/dashboard-alumni" element = {<AlumniDashboard/>} />
            <Route path="/alumni/jobs" element={<AlumniJobListings/>} />
            <Route path="/alumni/discussions" element={<AlumniDiscussionForum/>} />
            <Route path="/alumni/create-discussion" element={<CreateDiscussion/>} />
            <Route path="/alumni/view-discussion" element={<ViewDiscussion/>} />
            <Route path="/alumni/events" element={< AlumniEvents />} />
            <Route path="/alumni/resources" element={<AlumniResources />} />
            <Route path="/alumni/profile" element={<AlumniProfile />} />
            <Route path="/alumni/notifications" element = {<AlumniNotifications/>}/>
            <Route path="/dashboard-faculty"  element={<FacultyDashboard/>} />
            <Route path="/faculty/mentorship" element={<FacultyMentorship/>} />
            <Route path="/faculty/events" element={<FacultyEvents/>} />
            <Route path="/faculty/resources" element={<FacultyResources/>} /> 
            <Route path="/faculty/discussions" element={<FacultyDiscussions/>} />
            <Route path="/faculty/notifications" element={<FacultyNotifications/>} />
            <Route path="/faculty/profile" element ={<FacultyProfile/>} />
            <Route path="/faculty/create-discussion" element={<FacultyCreateDiscussion/>} />
            <Route path="/dashboard-company" element={<CompanyDashboard/>} />
            <Route path="/company/profile" element = {<CompanyProfile/>} />
            <Route path="/company/post-job" element = {<PostJob/>} />
            <Route path="/company/view-applications" element={<ViewApplications/>} />
            <Route path="/company/internships" element={<PostInternship />} />
            <Route path="/company/notifications" element = {<CompanyNotifications/>} />
            <Route path="/company/event" element={<CreateEvent/>} />
            <Route path="/dashboard-admin" element={<AdminDashboard/>} />
            <Route path="/admin/users" element={<ManageUsers/>} />
            <Route path="/admin/jobs" element={<ManageJobs/>} />
            <Route path="/admin/internships" element={<ManageInternships/>} />
            <Route path="/admin/events" element={< ManageEvents/>} />
            <Route path="/admin/discussions" element={<ManageDiscussions />} />
            <Route path="/admin/resources" element={<ManageResources/>} />
            <Route path="/admin/profile" element={<Profile/>} />
            <Route path="/admin/status" element={<Status/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

