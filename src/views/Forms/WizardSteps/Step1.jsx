import React from "react";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import FormLabel from "@material-ui/core/FormLabel";
import Check from "@material-ui/icons/Check";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Datetime from "react-datetime";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  },
  ...customSelectStyle
  //...customCheckboxRadioSwitch
};

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: "",
      childSexType: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success" &&
      this.state.emailState === "success"
    ) {
      return true;
    } else {
      if (this.state.firstnameState !== "success") {
        this.setState({ firstnameState: "error" });
      }
      if (this.state.lastnameState !== "success") {
        this.setState({ lastnameState: "error" });
      }
      if (this.state.emailState !== "success") {
        this.setState({ emailState: "error" });
      }
    }
    return false;
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleSimple = event => {
    console.log(event.target.name, event.target.value);
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, sections } = this.props;
    console.log(sections);
    let groups = sections.groups;
    let htmlEle = groups.map((gp, index) => (
      <React.Fragment key={index}>
        <h4 className={classes.cardIconTitle}>{gp.description}</h4>
        {gp.elements.map((el, index) =>
          el.elementType === "text" ? (
            <CustomInput
              key={index}
              success={this.state.firstnameState === "success"}
              error={this.state.firstnameState === "error"}
              labelText={
                <span>
                  {el.label}
                  <small>(required)</small>
                </span>
              }
              id={el.name}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: event => this.change(event, "firstname", "length", 5),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    className={classes.inputAdornment}
                  >
                    <Face className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                )
              }}
            />
          ) : el.elementType === "radio" ? (
            <React.Fragment key={index}>
              <FormLabel
                className={
                  classes.labelHorizontal +
                  " " +
                  classes.labelHorizontalRadioCheckbox
                }
              >
                {el.description}
              </FormLabel>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                {el.options.map((op, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Radio
                        checked={this.state[op.name] === op.value}
                        onChange={this.handleChange}
                        value={this.state[op.value] ? this.state[op.value] : ""}
                        name={op.title}
                        aria-label={op.title}
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label
                    }}
                    label={op.title}
                  />
                ))}
              </div>
            </React.Fragment>
          ) : el.elementType === "checkbox" ? (
            <React.Fragment key={index}>
              <FormLabel
                className={
                  classes.labelHorizontal +
                  " " +
                  classes.labelHorizontalRadioCheckbox
                }
              >
                {el.description}
              </FormLabel>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                {el.options.map((op, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(3)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label
                    }}
                    label={op.title}
                  />
                ))}
              </div>
              <br />
            </React.Fragment>
          ) : el.elementType === "select" ? (
            <React.Fragment key={index}>
              <FormControl fullWidth className={classes.selectFormControl}>
                <InputLabel htmlFor={el.name} className={classes.selectLabel}>
                  {el.label}
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu
                  }}
                  classes={{
                    select: classes.select
                  }}
                  value={this.state[el.name] ? this.state[el.name] : ""}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: el.name,
                    id: el.name
                  }}
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    Choose below
                  </MenuItem>
                  {el.options.map((op, index) => (
                    <MenuItem
                      key={index}
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value={op.value}
                    >
                      {op.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <br />
            </React.Fragment>
          ) : (
            ""
          )
        )}
      </React.Fragment>
    ));

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <h4 className={classes.infoText}>{sections.description}</h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          {htmlEle}
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <CustomInput
            success={this.state.emailState === "success"}
            error={this.state.emailState === "error"}
            labelText={
              <span>
                Email <small>(required)</small>
              </span>
            }
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "email", "email"),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Email className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style, regularFormsStyle)(Step1);
