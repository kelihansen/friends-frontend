import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { localizeDate } from '../../utils/formatters';

export default class ShareableForm extends PureComponent {
  static propTypes = {
    shareableType: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    onComplete: PropTypes.func.isRequired
  };

  state = {
    description: '',
    expiration: '',
    urgent: false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { shareableType, onComplete } = this.props;
    let { expiration } = this.state;
    if(expiration) {
      expiration = localizeDate(expiration);
    }
    onComplete({ ...this.state, type: shareableType });
    this.setState({
      description: '',
      expiration: '',
      urgent: false
    });
  };

  render() {
    const { action, shareableType } = this.props;
    const { description, expiration, urgent } = this.state;

    return (
      <form className="shareable-form" onSubmit={this.handleSubmit}>
        <div className="description">
          <label htmlFor={`${shareableType}-description`}>Description:</label>
          <input id={`${shareableType}-description`} type="text" name="description" value={description} required onChange={this.handleChange}/>
        </div>

        <div className="expiration">
          <label htmlFor={`${shareableType}-expiration`}>By (optional):</label>
          <input id={`${shareableType}-expiration`} type="date" name="expiration" value={expiration} onChange={this.handleChange}/>
        </div>
    
        <div className="urgent-checkbox">
          <label htmlFor={`${shareableType}-urgent`}>Urgent?</label>
          <input id={`${shareableType}-urgent`} type="checkbox" name="urgent" checked={urgent} onChange={this.handleChange}/>
        </div>

        <button className="save-button" type="submit">{action}</button>
      </form>
    );
  }
}