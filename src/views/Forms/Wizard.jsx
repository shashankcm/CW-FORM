import React from "react";
import moment from "moment";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Step1 from "./WizardSteps/Step1.jsx";
import { createReferralListAction } from "../../redux/actions/createReferralFormAction";

import formData from "./formsummary";

class WizardView extends React.Component {
  constructor(props) {
    super(props);
    let indexSize = [];
    let sectionobjs = [];
    for (var key in formData) {
      if (key === "body") {
        var demoobj = formData[key].form;
        for (var form in demoobj) {
          var demoobj2 = demoobj[form].body.sections;
          var titleName = demoobj[form].name;
          var Description = demoobj[form].description;
          for (var sections in demoobj2) {
            var sectionName = demoobj2[sections].name;
            sectionobjs.push(demoobj2[sections]);
            indexSize.push({
              stepName: sectionName,
              sectionobj: demoobj2[sections],
              stepComponent: Step1,
              stepId: sectionName
            });
          }
        }

        this.state = {
          stepsarr: indexSize,
          titleName: titleName,
          Description: Description,
          childData: {
            formID: "1001",
            data: {},
            status: "active",
            audit: {
              createdBy: "Shashank Chikattimala",
              dateCreated: moment().format("MM/DD/YYYY, HH:MM:SS"),
              updatedBy: "Rajeev Lochan",
              dateModified: moment().format("MM/DD/YYYY, HH:MM:SS")
            }
          }
        };
      }
    }
  }
  handleCreateFormData = childInfo => {
    let sections = [];
    let stateCopy = Object.assign({}, this.state);
    for (var eachSection in childInfo) {
      let data = childInfo[eachSection];
      sections.push(data.newChildInfo);
    }
    stateCopy.childData.data["Sections"] = sections;
    this.setState(stateCopy);
    this.props.createReferralListAction(this.state.childData);
  };
  componentDidMount(e) {
    //console.log(this.props.history.push("/error-page"));
    //console.log(this.props.create_referralResponse);
  }

  componentWillReceiveProps(nextProps) {
    let create_referralResponse = nextProps.create_referralResponse;
    if (
      create_referralResponse.createReferralFormResponse != null &&
      create_referralResponse.error === null
    ) {
      this.props.history.push("/admin/referrals");
    } else {
      //this.props.history.push("/error-page");
    }
  }

  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} lg={10}>
          <Wizard
            validate
            steps={this.state.stepsarr}
            title={this.state.titleName}
            subtitle={this.state.Description}
            finishButtonClick={this.handleCreateFormData}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = store => ({
  create_referralResponse: store.createReferralForm
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createReferralListAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WizardView);
