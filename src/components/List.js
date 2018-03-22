import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    const tasks = this.props.preTasks
    const tasksLength = tasks.length
    return (
      <article className='card'>
          <header>
            <div className='grid'>
              <strong className='card__title'>{this.props.title}</strong>
              <span className='card__quantity'>{tasksLength} tasks</span>
            </div>
            <ul className='card__content'>
              {tasks.map(function(list){
                return <Card info={list}/>
               })}
            </ul>
          </header>
        </article>
    );
  }
}

export default List;