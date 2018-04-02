import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  
  render() {
    const cardTitle = this.props.title
    const count = this.props.counts
    
  
    return (
      <article className='card'>
          <header>
            <div className='grid'>
              <strong className='card__title'>{cardTitle}</strong>
              <span className='card__quantity'>{count.length} tasks</span>
            </div>
            <ul className='card__content'>
              {count.map(function(card){
                return <Card data={card} />
              })}
            </ul>
          </header>
        </article>
    );
  }
}

export default List;