import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //proceed to next step/page-
  nextStep = () => {
    const { step } = this.state; //we are getting step form state, its called 'destructuring'.
    this.setState({
      step: step + 1,
    });
  };

  // Go to previous step/page-
  prevStep = () => {
    const { step } = this.state; //we are getting step form state, its called 'destructuring'.
    this.setState({
      step: step - 1,
    });
  };

  //handle field change -
  handleChange = (inputfield) => (e) => {
    // this is called curried ..
    this.setState({
      [inputfield]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { firstname, lastname, occupation, email, city, bio } = this.state;
    const values = { firstname, lastname, occupation, email, city, bio };

    //we have many cases hence we will use switches..
    switch (step) {
      case 1:
        return (
          //wiil not pass prevstep because this is first step and there is not prev of this step
          <FormUserDetails
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            values={values}
            nextStep={this.nextStep}
            prevStep ={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return  (
            <Confirm 
              values={values}
              nextStep={this.nextStep}
              prevStep ={this.prevStep}
            />
          );
      case 4:
        return <Success/>;
      default:
        return null;
    }
  }
}

export default UserForm;
