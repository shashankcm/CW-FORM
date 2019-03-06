import React from "react";

export default class ReactTables extends React.Component {
  render() {
    const { classes } = this.props;
    const headerRow = dataTable.headerRow;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Referral List</h4>
            </CardHeader>
            <CardBody>
              <div style={{ textAlign: "right" }}>
                <Button
                  color="esystemsBlue"
                  onClick={() => this.handleNewReferralForm()}
                >
                  New Referral
                </Button>
              </div>
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
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
