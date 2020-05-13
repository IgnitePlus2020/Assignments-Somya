import React, { Component } from "react";

export class FormCustomerDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="OrderForm">
        <div
          style={{
            margin: "100px ",
            backgroundColor: "#DCDCDC",
            width: "800px",
            padding: "50px",
            borderRadius: "50px",
          }}
        >
          <div class="ui container" style={{ width: "500px" }}>
            <p>
              <form class="ui form">
                <h4 class="ui dividing header">Shipping Information</h4>

                <div class="field">
                  <label> Name </label>
                  <div class="two fields">
                    <div class="field">
                      <input
                        type="text"
                        name="shipping[first-name]"
                        placeholder="First Name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                      ></input>
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="shipping[last-name]"
                        placeholder="Last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                      ></input>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <h4 class="ui dividing header">Billing address</h4>
                  <div class="fields">
                    <div class="twelve wide field">
                      <label>street</label>
                      <input
                        type="text"
                        name="shipping[address]"
                        placeholder="Street Address"
                        onChange={handleChange("streetAddress")}
                        defaultValue={values.streetAddress}
                      ></input>
                    </div>
                    <div class="four wide field">
                      <label>Apartment</label>
                      <input
                        type="text"
                        name="shipping[address-2]"
                        placeholder="Apt #"
                        onChange={handleChange("apartment")}
                        defaultValue={values.apartment}
                      ></input>
                    </div>
                  </div>
                </div>

                <div class="two fields">
                  <div class="field">
                    <label>State</label>
                    <select
                      class="ui fluid dropdown"
                      onChange={handleChange("state")}
                      defaultValue={values.state}
                    >
                      <option value="">State</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                    </select>
                  </div>
                  <div class="field">
                    <label>Country</label>
                    <select
                      class="ui fluid dropdown"
                      onChange={handleChange("country")}
                      defaultValue={values.country}
                    >
                      <option value="">Country</option>
                      <option value="India">India</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="nepal">nepal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button
                    class="ui button"
                    style={{ backgroundColor: "#7FFF00" }}
                    onClick={this.continue}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCustomerDetails;
