import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Create from "@material-ui/icons/Create";
import Delete from "@material-ui/icons/Delete";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { referralListSaga } from "../../../redux/actions/referralListAction";
import { deleteReferralItemAction } from "../../../redux/actions/deleteReferralListItemAction";
import { fetchReferralList } from "../../../commonActions/commonReusableActions";

const styles = theme => ({
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class ReferralList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      headerRow: [],
      data: []
    };
  }

  componentDidMount() {
    this.props.referralListSaga();
  }

  handleNewReferralForm() {}

  componentWillReceiveProps(nextProps) {
    let completeDataList =
      nextProps.referralList_received_data.refferalList != null
        ? fetchReferralList(nextProps.referralList_received_data.refferalList)
        : [];
    let displayReferralList =
      completeDataList.length !== 0
        ? completeDataList.dataRows.map((prop, key) => {
            return {
              id: key,
              _id: prop[0],
              form_id: prop[1],
              form_Name: prop[2],
              created_By: prop[3],
              created_Date: prop[4],
              actions: (
                <div className="actions-right">
                  <Button
                    justIcon
                    round
                    simple
                    onClick={() => {
                      let obj = this.state.data.find(o => o.id === key);
                      alert(
                        "You've clicked EDIT button on \n{ \nName: " +
                          obj.name +
                          ", \nposition: " +
                          obj.position +
                          ", \noffice: " +
                          obj.office +
                          ", \nage: " +
                          obj.age +
                          "\n}."
                      );
                    }}
                    color="esystemsGreen"
                    className="create"
                  >
                    <Create />
                  </Button>{" "}
                  <Button
                    justIcon
                    round
                    simple
                    onClick={() => {
                      var data = this.state.data;
                      let returnStatus = data.find((o, i) => {
                        if (o.id === key) {
                          // here you should add some custom code so you can delete the data
                          // from this component and from your server as well
                          let requestedItem = data[i]._id;
                          this.props.deleteReferralItemAction(requestedItem);
                          //data.splice(i, 1);
                          return true;
                        }
                        return false;
                      });
                      //this.setState({ data: data });
                    }}
                    color="esystemsGreen"
                    className="delete"
                  >
                    <Delete />
                  </Button>{" "}
                </div>
              )
            };
          })
        : this.setState({ loading: true });
    this.setState({
      loading: nextProps.referralList_received_data.loading,
      headerRow: completeDataList.headerRow,
      data: displayReferralList
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.deleteReferralItemResponse.loading !==
      prevProps.deleteReferralItemResponse.loading
    ) {
      this.setState({
        data: []
      });
      this.props.referralListSaga();
      //return true;
    }
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    let headerRow = [];
    var table = "";

    if (loading === true) {
      table = (
        <CircularProgress className={classes.progress} color="secondary" />
      );
    } else {
      headerRow = this.state.headerRow ? this.state.headerRow : [];
      table = (
        <ReactTable
          data={this.state.data}
          filterable
          columns={[
            {
              Header: headerRow[0],
              accessor: "_id"
            },
            {
              Header: headerRow[1],
              accessor: "form_id"
            },
            {
              Header: headerRow[2],
              accessor: "form_Name"
            },
            {
              Header: headerRow[3],
              accessor: "created_By"
            },
            {
              Header: headerRow[4],
              accessor: "created_Date"
            },
            {
              Header: "Actions",
              accessor: "actions",
              sortable: false,
              filterable: false
            }
          ]}
          defaultPageSize={10}
          showPaginationTop
          showPaginationBottom={false}
          className="-striped -highlight"
        />
      );
    }
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="esystemsGreen">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Referral List</h4>
            </CardHeader>
            <CardBody>
              <div style={{ textAlign: "right" }}>
                <Button
                  color="esystemsGreen"
                  onClick={() => this.handleNewReferralForm()}
                >
                  Create New Referral Form
                </Button>
              </div>
              {table}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = store => ({
  referralList_received_data: store.referralList,
  deleteReferralItemResponse: store.deleteReferralItem
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      referralListSaga,
      deleteReferralItemAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ReferralList));
