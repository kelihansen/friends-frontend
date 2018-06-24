import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Credentials extends PureComponent {
  static propTypes = {
    submitCredentials: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    includeName: PropTypes.bool
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitCredentials(this.state);
  };

  render() {
    const { action, includeName = false } = this.props;
    const { firstName, lastName, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {includeName &&
          <Fragment>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={this.handleChange}/>
            <label htmlFor="lastName">First Name</label>
            <input type="text" id="lastName" value={lastName} onChange={this.handleChange}/>
          </Fragment>
        }

        <label htmlFor="email">First Name</label>
        <input type="text" id="email" value={email} onChange={this.handleChange}/>

        <label htmlFor="password">First Name</label>
        <input type="password" id="password" value={password} onChange={this.handleChange}/>

        <button type="submit">{action}</button>
      </form>
    );
  }
}