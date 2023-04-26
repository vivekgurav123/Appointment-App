// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointment extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: '',
  }

  onFormSubmit = ev => {
    ev.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStared: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onTitleChange = ev => {
    this.setState({
      title: ev.target.value,
    })
  }

  onDateChange = ev => {
    this.setState({
      date: ev.target.value,
    })
  }

  addedInFavo = id => {
    // const {appointmentList} = this.state
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  staredItems = () => {
    const {appointmentList} = this.state
    const filteredList = appointmentList.filter(each => each.isStared === true)

    this.setState({
      appointmentList: filteredList,
    })
  }

  render() {
    const {appointmentList, title, date} = this.state
    return (
      <div className="container">
        <div className="content-container">
          <div className="divide">
            <div className="appointment">
              <h1>Add Appointment</h1>
              <form onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title</label>
                <input
                  value={title}
                  type="text"
                  id="title"
                  onChange={this.onTitleChange}
                />
                <br />
                <label htmlFor="date">Date</label>
                <br />
                <input
                  value={date}
                  type="date"
                  id="date"
                  onChange={this.onDateChange}
                />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="separate">
            <h1>Appointments</h1>
            <button type="button" onClick={this.staredItems}>
              Starred
            </button>
          </div>
          <ul>
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                eachAppointment={eachAppointment}
                addedInFavo={this.addedInFavo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointment
