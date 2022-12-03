import React from "react";

function Schedule() {
  return (
    <section>
      {/* make a grid of the schedule */}
      <div className="schedule">
        <h1 className="page-title">Schedule</h1>

        <div className="schedule-grid">
          <div className="schedule-grid-item">
            <h2>Monday - Friday</h2>
            <p style={{ textDecoration: "underline" }}>
              <strong>Cardio</strong>{" "}
            </p>
            <p>10:00 AM - 11:00 AM</p>
            <p style={{ textDecoration: "underline " }}>Bodybuilding</p>
            <p>05:00 PM - 06:00 PM</p>
            <p style={{ textDecoration: "underline " }}>
              <strong>Cardio</strong>{" "}
            </p>
            <p>07:00 PM - 08:00 PM</p>
          </div>

          <div className="schedule-grid-item">
            <h2>Saturday</h2>
            <p style={{ textDecoration: "underline " }}>
              <strong>Cardio</strong>{" "}
            </p>
            <p>10:00 AM - 11:00 AM</p>
            <p style={{ textDecoration: "underline " }}>Bodybuilding</p>
            <p>05:00 PM - 06:00 PM</p>
            <p style={{ textDecoration: "underline " }}>
              <strong>Cardio</strong>{" "}
            </p>
            <p>07:00 PM - 08:00 PM</p>
          </div>
          <div className="schedule-grid-item">
            <h2>Sunday</h2>
            <p style={{ textDecoration: "underline " }}>
              <strong>Cardio</strong>{" "}
            </p>
            <p>09:00 AM - 11:00 AM</p>
            <p style={{ textDecoration: "underline " }}>Bodybuilding</p>
            <p>12:00 PM - 02:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
