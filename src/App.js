import {Component} from 'react'
import Clock from './clock';
import './App.css';

class App extends Component{
  state ={
    showClock : false
  }
   
  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock : !showClock
      }
    })
  }

  render() {
    const {showClock} = this.state
    return(
      <div className='app-container'>
        <button className='button' type="button" onClick={this.onToggleClock}>
          {showClock ? "Hide clock" : "Show Clock"}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}


  
export default App;
