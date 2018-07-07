import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProfile } from './actions';
import DayPicker from './DayPicker';

class AvailabilityForm extends PureComponent {
  static propTypes = {
    updateProfile: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired
  };

  state = {
    days: [],
    notes: ''
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ notes: value });
  };

  handleDayUpdate = checkedDays => {
    this.setState({ days: checkedDays });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateProfile({ availability: this.state })
      .then(() => this.props.onDone('editingAvailability'));
  };

  render() {
    const { notes, days } = this.state;

    return (
      <form className="availability-form" onSubmit={this.handleSubmit}>
        <DayPicker onUpdate={this.handleDayUpdate} days={days}/>
        <label htmlFor="notes">Notes:</label>
        <input onChange={this.handleChange} id="notes" name="notes" type="text" value={notes}/>
        <button className="save-button" type="submit">SAVE</button>
      </form>
    );
  }
}

export default connect(
  null,
  { updateProfile }
)(AvailabilityForm);
