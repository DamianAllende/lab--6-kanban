import React, { Component } from 'react'; 
import List from './List';
class Board extends Component {
  render() {
  	const listOne = this.props.newData[0]
  	const listTwo = this.props.newData[1]
  	const listThree = this.props.newData[2]
  	

    return (
      <div className='container grid'>
        <List title={listOne.title} preTasks={listOne.tasks} />
        <List title={listTwo.title} preTasks={listTwo.tasks} />
        <List title={listThree.title} preTasks={listThree.tasks} />
      </div>
    );
  }
}
export default Board;