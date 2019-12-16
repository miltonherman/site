import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './form.scss';

class CommonForm extends React.Component {
  state = {
    emailAddress: "",
    firstName: "",
    lastName: "",
    pathName: "",
    submitResult: {}
  }
  handleInputChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(
      this.state.emailAddress, {
        FNAME: this.state.firstName,
        LNAME: this.state.lastName,
        PATHNAME: this.state.pathName
      }
    );
    this.setState({submitResult: result});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email address
          <input
            type="text"
            name="emailAddress"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
        {this.state.submitResult.msg &&
          <div className={''}>{this.state.submitResult.msg}</div>
        }
      </form>
    );
  }
}

export default CommonForm;
