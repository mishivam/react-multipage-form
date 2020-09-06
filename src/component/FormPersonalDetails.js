import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, TextField, RaisedButton } from "material-ui";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) =>{
    e.preventDefault();
    this.props.prevStep();  
  }
  render() {
    const { values, handleChange } = this.props;
    const styles = {
      button: {
        margin: 15,
      },
    };

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Your Details" />
          <TextField
            hintText="Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="city"
            floatingLabelText="city"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="bio"
            floatingLabelText="bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton label="Continue" primary={true} style={styles.button} onClick = {this.continue}/>
          <RaisedButton label="Previous" primary={false} style={styles.button} onClick = {this.previous}/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
