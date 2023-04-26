// Write your code here
import {format} from 'date-fns'

const Appointment = props => {
  const {eachAppointment, addedInFavo} = props
  const {id, title, date, isStared} = eachAppointment

  const imgeUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const isFavorite = () => {
    addedInFavo(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <button type="button" data-testid="star">
          <img src={imgeUrl} alt="star" onClick={isFavorite} />
        </button>
      </div>
      <p>Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}
export default Appointment
