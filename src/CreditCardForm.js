import React, {Component} from 'react';

export default class extends Component {

    constructor(props) {
        super();
        this.state = {
            ccn: props.ccn || '',
            type: props.type || '',
            ccv: props.ccv || '',
            submissionAttempted: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(changeEvent) {

        const element = changeEvent.target;
        const value = element.value;
        const name = element.name;

        this.setState({
            [name]: value,
            submissionAttempted: false
        });


    }

    handleSubmit(submitEvent) {
        submitEvent.preventDefault();
        this.props.whenSubmitted(this.state);
        this.setState({submissionAttempted: true});
    }

    render() {

        const ccnIsInvalid = this.state.submissionAttempted && this.state.ccn.length !== 16;

        return (
          <form id="credit-card-form" onSubmit={this.handleSubmit}>
              <h2>Enter your payment information</h2>
              <div>
                  { ccnIsInvalid ? <p className="box box-border">CCN must be 16 characters.</p> : null}
                  <label className="form-label">CCN</label>
                  <input
                    className="form-input"
                    type="text"
                    name="ccn"
                    onChange={this.handleInputChange}
                    value={this.state.ccn}
                  />
              </div>
              <div>
                  <label className="form-label">Type</label>
                  <select
                    className="form-select"
                    name="type"
                    onChange={this.handleInputChange}
                    value={this.state.type}
                  >
                      <option>Visa</option>
                      <option>Mastercard</option>
                      <option>American Express</option>
                      <option>Discover</option>
                  </select>
              </div>
              <div>
                  <label className="form-label">CCV</label>
                  <input
                    className="form-input"
                    type="text"
                    name="ccv"
                    onChange={this.handleInputChange}
                    value={this.state.ccv}
                  />
              </div>
              <button type="submit" className="btn btn-primary mt">Place Order</button>
          </form>
        );

    }

}