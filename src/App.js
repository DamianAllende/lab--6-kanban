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
      projects: data,
      newInput: ""
    }

   //console.log(this.state.newInput)
  }





  damian(e){
    e.preventDefault() 
    
    let valueInput = document.querySelector(".form__text").value 
    return console.log(valueInput)
    this.setState({
      newInput: valueInput
    });
  }


  





  

 
  render() {

const datalist = this.state.projects
//console.log(damian)




    
    return (
      <div>
        <Header />
        <section>
          <div className='board'>
            <div className='board__form container'>
              <form onSubmit={this.damian}>
                <div className='form'>
                  <input ref='newItem' className='form__text' type='text' placeholder='Add new item...' />
                  <button className='form__submit' type='submit'>Add new</button>
                </div>
              </form>
            </div>
            <Board newData={datalist} />
          </div>
        </section>
      </div>
    );
  }
}
export default App;
