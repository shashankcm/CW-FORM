import React from "react";
import moment from "moment";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ReferralFormSections from "./ReferralFormSections/ReferralFormSections.jsx";
import { createReferralListAction } from "../../redux/actions/createReferralFormAction";

import { getReferralFormJsonAction } from "../../redux/actions/getReferralFormJSONAction";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class ReferralFormwizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsarr: [],
      titleName: "",
      Description: "",
      loading: true,
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
    this.props.getReferralFormJsonAction("5c76f6e7ca4ac454388954e3");
  }

  componentWillReceiveProps(nextProps) {
    let create_referralResponse = nextProps.create_referralResponse;
    if (
      create_referralResponse.createReferralFormResponse != null &&
      create_referralResponse.error === null
    ) {
      this.props.history.push("/admin/referrals");
    } else {
    }

    let referralFormInstance = nextProps.get_referralFormInstanceResponse;

    if (referralFormInstance.loading === false) {
      this.setState({ loading: false });
      let formTemplateSections =
        referralFormInstance.getReferralFormJSON.form.body.sections;
      let indexSize = [];
      let sectionobjs = [];
      let titleName = "";
      let Description = "";
      for (var sections in formTemplateSections) {
        var sectionName = formTemplateSections[sections].name;
        titleName = referralFormInstance.getReferralFormJSON.form.name;
        Description = referralFormInstance.getReferralFormJSON.form.description;
        indexSize.push({
          stepName: sectionName,
          sectionobj: formTemplateSections[sections],
          stepComponent: ReferralFormSections,
          stepId: sectionName
        });
      }
      this.setState({
        stepsarr: indexSize,
        titleName: titleName,
        Description: Description
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    let formDisplay = "";
    if (loading === true) {
      formDisplay = (
        <CircularProgress className={classes.progress} color="secondary" />
      );
    } else {
      formDisplay = (
        <Wizard
          validate
          steps={this.state.stepsarr}
          title={this.state.titleName}
          subtitle={this.state.Description}
          finishButtonClick={this.handleCreateFormData}
        />
      );
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} lg={10}>
          {formDisplay}
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = store => ({
  create_referralResponse: store.createReferralForm,
  get_referralFormInstanceResponse: store.getReferralFormJSON
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createReferralListAction,
      getReferralFormJsonAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ReferralFormwizard));
