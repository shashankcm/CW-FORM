import FormEditor from "views/FormEditor/FormEditor.jsx";
import ReferralFormwizard from "views/ReferralForm/ReferralFormwizard.jsx";
import Assignment from "@material-ui/icons/Assignment";
import Description from "@material-ui/icons/Description";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
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
    path: "/referralFormWizard",
    name: "Create Referral Form",
    rtlName: "ساحر",
    icon: AssignmentTurnedIn,
    mini: "W",
    rtlMini: "ث",
    component: ReferralFormwizard,
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
  }
];
export default dashRoutes;
