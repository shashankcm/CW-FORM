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
    const { history } = this.props.history;
    this.props.createReferralListAction(this.state.childData, history);
  };
  componentDidMount(e) {
    console.log(this.props.history);
  }
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} lg={10}>
          <Wizard
            validate
            steps={this.state.stepsarr}
            title="Build Your Profile"
            subtitle="This information will let us know more about you."
            finishButtonClick={this.handleCreateFormData}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createReferralListAction
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(WizardView);
