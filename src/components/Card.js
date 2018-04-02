import React, { Component } from 'react';
class Card extends Component {
  render() {
    const datacard = this.props.data

    return (
      <li className='card__item'>
        <p>{datacard.title}</p>
        <small className='card__legend'>{datacard.tagged}</small>
        <button className='card__action'>
          <i className='fa fa-times'></i>
        </button>
      </li>
    );
  }
}
export default Card;





