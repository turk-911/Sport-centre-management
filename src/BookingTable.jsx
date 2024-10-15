import React from "react";

const BookingTable = ({ bookings }) => {
  return (
    <div className="mt-4">
      <h2 className="text-center">Bookings</h2>
      {bookings.length > 0 ? (
        <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Court</th>
              <th>Time Slot</th>
              <th>Booked By</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.court}</td>
                <td>{booking.time}</td>
                <td>{booking.bookedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-3">No bookings available.</p>
      )}
    </div>
  );
};

export default BookingTable;
