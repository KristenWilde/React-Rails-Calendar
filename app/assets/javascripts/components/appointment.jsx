class Appointment extends React.components {
  render() {
    return (
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{this.props.appointment.appt_time}</p>
      </div>
    )
  }
}
