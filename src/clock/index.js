import {Component} from 'react'
import './index.css'

class Clock extends Component {
    state ={
        date: new Date()
    }

    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000)
        console.log("timer")
    }
     componentWillUnmount() {
        clearInterval(this.timerId)
        console.log("stoped timer")
     }


    tick =() => {
        this.setState({date:new Date()})
    }
    render(){
        const {date} = this.state
        console.log(date)
        return(
            <div className='Clock-container'>
                <h1 className='heading'>Clock</h1>
                <p className='time'>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock