import React, { Component } from 'react'; 
import List from './List';
class Board extends Component {

  render() {
  	const listNew = this.props.newData
  


    return (
      <div className='container grid'>
        {listNew.map(function(list){
          return <List title={list.title} counts={list.tasks} />
        })}
        
      </div>
    );
  }
}
export default Board;