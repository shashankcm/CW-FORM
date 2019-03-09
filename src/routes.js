import Buttons from "views/Components/Buttons.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Charts from "views/Charts/Charts.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";

import ErrorPage from "views/Pages/ErrorPage.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Icons from "views/Components/Icons.jsx";
import LockScreenPage from "views/Pages/LockScreenPage.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Panels from "views/Components/Panels.jsx";
import PricingPage from "views/Pages/PricingPage.jsx";
import RTLSupport from "views/Pages/RTLSupport.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import Typography from "views/Components/Typography.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import Wizard from "views/Forms/Wizard.jsx";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Assignment from "@material-ui/icons/Assignment";
import Description from "@material-ui/icons/Description";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";

import ReferralListTables from "views/Tables/Referral/ReferralList.jsx";
import FormList from "./views/Tables/Form/FormList";

var dashRoutes = [
  {
    path: "/forms",
    name: "Forms",
    rtlName: "التقويم",
    icon: Description,
    component: FormList,
    layout: "/admin"
  },
  {
    path: "/referrals",
    name: "Referrals",
    rtlName: "التقويم",
    icon: Assignment,
    component: ReferralListTables,
    layout: "/admin"
  },

  {
    path: "/wizard",
    name: "Create Referral Form",
    rtlName: "ساحر",
    icon: AssignmentTurnedIn,
    mini: "W",
    rtlMini: "ث",
    component: Wizard,
    layout: "/admin"
  },
  {
    path: "/formEditor",
    name: "FormEditor",
    rtlName: "ساحر",
    mini: "W",
    rtlMini: "ث",
    component: FormEditor,
    layout: "/admin"
  } /* ,
  {
    path: "/error-page",
    name: "Error Page",
    rtlName: "صفحة الخطأ",
    mini: "E",
    rtlMini: "البريد",
    component: ErrorPage,
    layout: "/admin"
  } */
];
export default dashRoutes;
