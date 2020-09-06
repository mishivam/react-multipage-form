import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, List, ListItem, RaisedButton } from "material-ui";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirmation" />
          <List>
            <ListItem
              primaryText="firstname"
              secondaryText={values.firstname}
            />
            <ListItem primaryText="lastname" secondaryText={values.lastname} />
            <ListItem primaryText="email" secondaryText={values.email} />
            <ListItem
              primaryText="occupation"
              secondaryText={values.occupation}
            />
            <ListItem primaryText="city" secondaryText={values.city} />
            <ListItem primaryText="bio" secondaryText={values.bio} />
          </List>
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Previous"
            primary={false}
            style={styles.button}
            onClick={this.previous}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
