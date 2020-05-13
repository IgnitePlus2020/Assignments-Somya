import React, { Component } from 'react'

export class FormCardDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };


    render() {
        const {values,handleChange} =this.props;
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
                    <h4 class="ui dividing header">Billing Information</h4>
                    <label>Card Type</label>
                    <select
                      class="ui fluid dropdown"
                      onChange={handleChange("cardType")}
                      defaultValue={values.cardType}
                    >
                      <option value="">Card Type</option>
                      <option value="American Express">American Express</option>
                      <option value="Visa">Visa</option>
                      <option value="Discover">Discover</option>
                    </select>
                    <div class="fields">
                      <div class="seven wide field">
                        <label>Card Number</label>
                        <input
                          type="text"
                          name="card[number]"
                          maxlength="16"
                          placeholder="Card #"
                          onChange={handleChange("cardNo")}
                          defaultValue={values.cardNo}
                        ></input>
                      </div>

                      <div class="three wide field">
                        <label>CVV</label>
                        <input
                          type="password"
                          name="card[cvc]"
                          maxlength="3"
                          placeholder="CVV"
                          onChange={handleChange("cvv")}
                          defaultValue={values.cvv}
                        ></input>
                      </div>

                      <div class="six wide field">
                        <label>Expiration</label>
                        <div class="two fields">
                          <div class="field">
                            <select
                              class="ui fluid search dropdown"
                              name="card[expire-month]"
                              onChange={handleChange("month")}
                              defaultValue={values.month}
                            >
                              <option value="">Month</option>
                              <option value="1">January</option>
                              <option value="2">February</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                          </div>

                          <div class="field">
                            <input
                              type="text"
                              name="card[expire-year]"
                              maxlength="4"
                              placeholder="Year"
                              onChange={handleChange("year")}
                              defaultValue={values.year}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 class="ui dividing header">Receipt</h4>
                    <div class="field">
                      <label>Send Receipt To:</label>
                      <div class="field">
                        <input
                          type="text"
                          name="shipping[email]"
                          placeholder="email"
                          onChange={handleChange("email")}
                          defaultValue={values.email}
                        ></input>
                      </div>
                    </div>
                    <div class="two fields">
                            
                            <div className="field">
                                <button
                                    class="ui button"
                                    style={{ backgroundColor: "#7FFF00" }}
                                    onClick={this.back}
                                >
                                    Back
                                </button>
                            </div>
                            <div className="field">
                                <button
                                    class="ui button"
                                    style={{ backgroundColor: "#7FFF00" }}
                                    onClick={this.continue}
                                >
                                    Continue
                                </button>
                            </div>
                        
                            </div>    
                            
                  </form>
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default FormCardDetails
