import React, { useState, useEffect } from "react";
import BookingTable from "./BookingTable";
import BookingForm from "./BookingForm";
import ScheduleChart from "./ScheduleChart"; // Import the chart component
import "./App.css"; // Custom CSS

const App = () => {
  const [centres] = useState(["Downtown", "North Zone"]);
  const [sports] = useState(["Tennis", "Badminton"]);
  const [selectedCentre, setSelectedCentre] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [bookings, setBookings] = useState([]);

  const mockBookings = [
    { court: "Court 1", start: 9, end: 10, bookedBy: "John Doe" },
    { court: "Court 2", start: 10, end: 11, bookedBy: "Jane Smith" },
  ];

  useEffect(() => {
    if (selectedCentre && selectedSport) {
      setBookings(mockBookings);
    }
  }, [selectedCentre, selectedSport]);

  const handleNewBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">SportCentre Manager</h1>

      <div className="selection-row">
        <div className="selection-column">
          <label>Select Centre</label>
          <select
            className="select-input"
            onChange={(e) => setSelectedCentre(e.target.value)}
          >
            <option value="">Select</option>
            {centres.map((centre, index) => (
              <option key={index} value={centre}>
                {centre}
              </option>
            ))}
          </select>
        </div>

        <div className="selection-column">
          <label>Select Sport</label>
          <select
            className="select-input"
            onChange={(e) => setSelectedSport(e.target.value)}
          >
            <option value="">Select</option>
            {sports.map((sport, index) => (
              <option key={index} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ScheduleChart bookings={bookings} />
      <BookingForm onNewBooking={handleNewBooking} />
    </div>
  );
};

export default App;
