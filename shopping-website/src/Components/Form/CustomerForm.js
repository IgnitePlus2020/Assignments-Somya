import React, { Component } from "react";
import FormCustomerDetails from "./FormCustomerDetails";
import FormCardDetails from "./FormCardDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class CustomerForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartment: "",
    state: "",
    country: "",
    cardType: "",
    cardNo: "",
    cvv: "",
    month: "",
    year: "",
    email: "",
  };
  //go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //go to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      streetAddress,
      apartment,
      state,
      country,
      cardType,
      cardNo,
      cvv,
      month,
      year,
      email,
    } = this.state;
    const values = {
      firstName,
      lastName,
      streetAddress,
      apartment,
      state,
      country,
      cardType,
      cardNo,
      cvv,
      month,
      year,
      email,
    };

    switch (step) {
      case 1:
        return (
          <FormCustomerDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormCardDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default CustomerForm;
