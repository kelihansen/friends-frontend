import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../../utils/formatters';

const dayObject = { 
  sunday: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
};

const dayArray = Object.keys(dayObject);

const initialState = () => ({ days: dayObject });

export default class DayPicker extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired
  };

  state = initialState();

  handleChange = ({ target }) => {
    const { name, checked } = target;
    this.setState(prevState => {
      return { days: { ...prevState.days, [name]: checked } };
    }, this.handleUpdate);
  };

  handleUpdate = () => {
    const { days } = this.state;
    const checkedDays = dayArray.filter(day => days[day]);
    this.props.onUpdate(checkedDays);
  };

  render() {
    const { days } = this.state;
    
    return (
      <Fragment>
        {dayArray.map(day => (
          <div className="checkbox" key={day}>
            <input onChange={this.handleChange} id={day} type='checkbox' name={day} checked={days[day]}/>
            <label htmlFor={day}>{capitalize(day)}</label>
          </div>
        ))}
      </Fragment>
    );
  }
}