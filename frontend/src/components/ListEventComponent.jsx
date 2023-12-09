import React, { useEffect, useState } from "react";
import EventService from "../services/EventService";

const ListEventComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () =>
    await EventService.getEvents().then((res) => {
      setEvents(res.data);
      console.log(res);
    });

  return (
    <div className="container">
      <h2 className="text-center mt-5">All Events</h2>
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Event Title</th>
              <th>Event Description</th>
              <th>Event Date</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{event.eventTitle}</td>
                <td>{event.eventDescription}</td>
                <td>{event.eventDate}</td>
                <td>{event.category}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEventComponent;
