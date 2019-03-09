import React from 'react';

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";


import showResults from "./showResults.js";
import FieldArraysForm from "./FieldArraysForm.jsx";

//import DynamicForm from "./DynamicForm";


const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
    }
};

class FormEditor extends React.Component {

    render() {

        const { classes } = this.props;

        return (

            <FieldArraysForm onSubmit={showResults} />

            // <DynamicForm />

        );
    }
}
export default withStyles(styles)(FormEditor)