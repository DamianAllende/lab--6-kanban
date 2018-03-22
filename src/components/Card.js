import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <li className='card__item'>
        <p>`{this.props.info.title}`</p>
        <small className='card__legend'>{this.props.info.tagged}</small>
        <button className='card__action'>
          <i className='fa fa-times'></i>
        </button>
      </li>
    );
  }
}

export default Card;





