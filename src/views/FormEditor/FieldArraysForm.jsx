import React from 'react';
import { Field, FieldArray, reduxForm, arrayPush } from 'redux-form';

import './style.css';



import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";


// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//import Accordion from "components/Accordion/Accordion.jsx";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import ViewAgenda from "@material-ui/icons/ViewAgenda";
import ShortText from "@material-ui/icons/ShortText";
import ClearButton from "@material-ui/icons/ClearRounded";
import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";


import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

import { Accordion, AccordionSection } from 'redux-accordion';

//import Collapsible from 'react-collapsible';

import validate from './validate';

// this.handleClick = (e) => {
//   this.inputElement.click();
// };

// const styles = theme => ({
//   fab: {
//     margin: theme.spacing.unit,
//   },
//   extendedIcon: {
//     marginRight: theme.spacing.unit,
//   },
// });

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (


  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple"></InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input,
        id: 'age-native-simple',
        fullWidth: true
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)


const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (

  <TextField
    // hintText={label}
    // errorText={touched && error}
    fullWidth={true}
    {...input}
    {...custom}
  />


)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />

      <CustomInput
        labelText={label}
        id={label}
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: { type },
          input: { ...input }
        }}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderElements = ({ fields, meta: { error } }) => (
  <div>

    {/* <li>
      <Button type="button" onClick={() => fields.push()} color="rose">Add Elements</Button>
    </li> */}
    <div style={{ textAlign: "right", color: "success" }}>
      <Button size="small" type="button" onClick={() => fields.push({})} color="success">
        <ShortText />
        Add Element
      </Button>
    </div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={12} >

        {fields.map((elementItem, index) => (

          <div key={index} className="element-border">
            <div style={{ textAlign: "right" }}>
              <IconButton fontSize="small" size="small" onClick={() => fields.remove(index)} aria-label="Delete"  >
                <ClearButton fontSize="small" />
              </IconButton >
              {/* <span style={{ fontSize: "125%" }}>Section #{index + 1}</span> */}
            </div>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                {/* <div>
                  <IconButton fontSize="small" size="small" onClick={() => fields.remove(index)} aria-label="Delete"  >
                    <ClearButton fontSize="small" />
                  </IconButton >
                  <span style={{ fontSize: "125%" }}>Element #{index + 1}</span>
                </div> */}

                <label>Element Name:</label>
                <Field
                  name={`${elementItem}.elementName`}
                  type="text"
                  component={renderTextField}
                  label="Element Name"
                  placeholder="Enter Element Name"
                />

                <label>Element Type:</label>
                <Field
                  name={`${elementItem}.elementType`}
                  component={renderSelectField}
                  label="Favorite Color"
                >
                  <option value="" ></option>
                  <option value={'text'}>Text Input</option>
                  <option value={'radio'}>Radio Button</option>
                  <option value={'select'}>Select Box</option>
                </Field>

                {/* <Field
                  name={`${elementItem}.elementType`}
                  component={renderSelectField}
                  label="Element Type"
                >
                  <MenuItem value="text" primaryText="Text" />
                  <MenuItem value="select" primaryText="Select" />
                  <MenuItem value="radio" primaryText="Radio" />
                </Field> */}

              </GridItem>

              {/* <GridItem xs={12} sm={12} md={6} style={{ textAlign: "right" }}> */}
              {/* <Button
                  type="button"
                  title="Remove Element"
                  onClick={() => fields.remove(index)}
                  color="rose"
                /> */}
              {/* <IconButton size="small" onClick={() => fields.remove(index)} color="primary" aria-label="Delete" >
                  <DeleteIcon fontSize="small" />
                </IconButton > */}
              {/* </GridItem> */}
            </GridContainer>
          </div>
        ))}
        {error && <li className="error">{error}</li>}
      </GridItem>
    </GridContainer>
  </div>
);

const renderGroups = ({ fields, meta: { error } }) => (
  <div>

    {/* <Button type="button" onClick={() => fields.push()} color="rose">Add Group</Button> */}
    <div style={{ textAlign: "right" }}>
      <Button size="small" type="button" onClick={() => fields.push({})} color="success">
        <ViewAgenda />
        Add Group
      </Button>
    </div>

    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        {fields.map((group, index) => (
          <div key={index} className="group-border">
            <div style={{ textAlign: "right" }}>
              <IconButton fontSize="small" size="small" onClick={() => fields.remove(index)} aria-label="Delete"  >
                <ClearButton fontSize="small" />
              </IconButton >
              {/* <span style={{ fontSize: "125%" }}>Section #{index + 1}</span> */}
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>

                <label>Group Name:</label>
                <Field
                  name={`${group}.groupName`}
                  type="text"
                  component={renderTextField}
                  label={`Group #${index + 1}`}
                  placeholder="Enter Group Name"
                />
              </GridItem>

              {/* <GridItem xs={12} sm={12} md={6} style={{ textAlign: "right" }}> */}
              {/* <Button
                  type="button"
                  title="Remove Group"
                  onClick={() => fields.remove(index)}
                  color="rose"
                /> */}
              {/* <IconButton size="small" onClick={() => fields.remove(index)} color="primary" aria-label="Delete" >
                  <DeleteIcon fontSize="small" />
                </IconButton > */}
              {/* </GridItem> */}
            </GridContainer>
            <FieldArray name={`${group}.elements`} component={renderElements} />
          </div>
        ))}
        {error && <li className="error">{error}</li>}
      </GridItem>
    </GridContainer>
  </div>
);

const renderSection = ({ fields, classes, meta: { touched, error, submitFailed } }) => (



  < div >
    <div style={{ textAlign: "right" }}>

      <Button size="small" type="button" onClick={() => fields.push({})} color="success">
        <ViewCarousel />
        Add Section
      </Button>

    </div>

    {(touched || submitFailed) && error && <span>{error}</span>}

    <GridContainer >
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <br></br>
        {fields.map((section, index) => (

          <Accordion >
            <AccordionSection title={`Section ${index + 1}`} openByDefault={true} singleOpen={false} >
              <div className="section-border" >

                <div style={{ textAlign: "right" }}>
                  <IconButton fontSize="small" size="small" onClick={() => fields.remove(index)} aria-label="Delete"  >
                    <ClearButton fontSize="small" />
                  </IconButton >
                  {/* <span style={{ fontSize: "125%" }}>Section #{index + 1}</span> */}
                </div>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={6}>

                    <label>Section Name:</label>
                    <Field
                      name={`${section}.sectionName`}
                      type="text"
                      component={renderTextField}
                      label="Section Name"
                      placeholder="Enter Section Name"
                    />
                  </GridItem>

                  {/* <GridItem xs={12} sm={12} md={6} style={{ textAlign: "right" }}> */}
                  {/* <Button
                  type="button"
                  title="Remove"
                  onClick={() => fields.remove(index)}
                  color="rose"
                /> */}
                  <br></br>
                  {/* </GridItem> */}
                </GridContainer>
                <FieldArray name={`${section}.groups`} component={renderGroups} />
              </div>
            </AccordionSection>
            <br></br>
          </Accordion>
        ))}
      </GridItem>
    </GridContainer>

  </div >
);

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={6} sm={8} md={10} lg={12}>
        <Card>
          <CardHeader icon>
            <CardText color="success">
              <h4>Form Editor</h4>
            </CardText>
          </CardHeader>
          <CardBody>


            {/* <form onSubmit={handleSubmit} className={cardTitle} >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <Field
                    name="formName"
                    type="text"
                    component={renderTextField}
                    label="Form Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <Button type="submit" disabled={submitting} color="rose" >Submit</Button>
                  <Button type="button" disabled={pristine || submitting} onClick={reset} color="rose">
                    Clear
                  </Button>
                </div>
              </div>

              <FieldArray name="section" component={renderSection} />

            </form> */}

            <GridItem xs={12} sm={12} md={12} lg={12} >
              <form onSubmit={handleSubmit} className={cardTitle} >
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6} >

                    <label>Form Name:</label>
                    <Field
                      name="formID"
                      type="text"
                      component={renderTextField}
                      label="Form Name"
                      placeholder="Enter Form Name"
                    />

                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} style={{ textAlign: "right" }}>
                    <Button type="submit" disabled={submitting} color="success" >Save</Button>
                    <Button type="button" disabled={pristine || submitting} color="success" >Preview</Button>
                    <Button type="button" disabled={pristine || submitting} color="success" >Publish</Button>
                    {/* <Button type="button" disabled={pristine || submitting} onClick={reset} color="success">
                      Clear
                  </Button> */}
                  </GridItem>
                </GridContainer>
                <FieldArray name="section" component={renderSection} classes />
              </form>
            </GridItem>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer >
  );
};

export default reduxForm({
  form: 'formEngine', // a unique identifier for this form
  validate,
})(FieldArraysForm);
