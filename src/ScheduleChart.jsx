import React from "react";
import "./ScheduleChart.css";

const ScheduleChart = ({ bookings }) => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">📅 Daily Schedule</h2>
      <div className="schedule-grid">
        {bookings.map((booking, index) => (
          <div className="schedule-card" key={index}>
            <h3 className="court-name">🏟️ {booking.court}</h3>
            <p className="booking-time">⏰ {booking.time}</p>
            <p className="booked-by">👤 {booking.bookedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleChart;
