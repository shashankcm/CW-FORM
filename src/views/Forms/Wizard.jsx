import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";
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
            indexSize.push({ stepName: sectionName, stepComponent: Step1, stepId: sectionName });
          }
        }

        this.state = {
          stepsarr: indexSize,
          secobjarr: sectionobjs
        };

      }
    }
  }

  render() {
    /*
    [
              { stepName: "About", stepComponent: Step1, stepId: "about" },
              { stepName: "Account", stepComponent: Step2, stepId: "account" },
              { stepName: "Address", stepComponent: Step3, stepId: "address" },
              { stepName: "About", stepComponent: Step1, stepId: "about1" },
              { stepName: "Account", stepComponent: Step2, stepId: "account2" },
              { stepName: "Address", stepComponent: Step3, stepId: "address2" },
              { stepName: "About", stepComponent: Step1, stepId: "about2" },
              { stepName: "Account", stepComponent: Step2, stepId: "account3" },
              { stepName: "Address", stepComponent: Step3, stepId: "address3" },
              { stepName: "About", stepComponent: Step1, stepId: "about3" }
            ]
    */
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={this.state.stepsarr}
            sectionobjs={this.state.secobjarr}
            title="Build Your Profile"
            subtitle="This information will let us know more about you."
            finishButtonClick={e => console.log(e)}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
