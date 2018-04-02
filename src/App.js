import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';
import Header from './components/Header';
import Board from './components/Board';
import data from './datasource/data'

class App extends Component {

 constructor() {
    super()
    this.state = {
      projects: data 
    }
  }


handleSubmit = e => {
  e.preventDefault()
  this.refs.newItem.value
  

  const newItems= {
    key: this.state.projects[0].tasks.length +1,
    title: this.refs.newItem.value,
    tagged: '.internal'
  }

const newTasks = this.state.projects[0].tasks.push(newItems)
const newState = this.state.projects

  this.setState ({
    projects: newState
  });

  this.refs.newItem.value = ""
  
}

render() {
  

    return (
      <div>
        <Header />
        <section>
          <div className='board'>
            <div className='board__form container'>
              <form onSubmit={this.handleSubmit}>
                <div className='form'>
                  <input ref='newItem' className='form__text' type='text' placeholder={this.state.placeholder}/>
                  <button className='form__submit' type='submit'>Add new</button>
                </div>
              </form>
            </div>
            <Board newData={this.state.projects} />
          </div>
        </section>
      </div>
    );
  }
}
export default App;
