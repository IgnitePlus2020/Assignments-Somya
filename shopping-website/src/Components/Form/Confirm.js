import React, { Component } from "react";


export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        firstName,
        lastName,
        streetAddress,
        apartment,
        state,
        country,
   
      },
    } = this.props;

    return (
      <div
        className="OrderForm"
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
              <h2 class="ui dividing header">Confirm Details</h2>
              <br />
              <div>
                <h3>
                  <b>Name : </b> {firstName} {lastName}
                  <br />
                  <br></br>
                  <b>Address : </b> {apartment} ,{state} , {country}{" "}
                  {streetAddress}
                </h3>
              </div>

              <div class="two fields" style={{ margin: "20px" }}>
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
    );
  }
}

export default Confirm;
