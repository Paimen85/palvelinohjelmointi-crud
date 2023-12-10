import React, { useEffect, useState } from "react";
import EventService from "../services/EventService";
import { Link } from "react-router-dom";

const ListEventComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () =>
    await EventService.getEvents().then((res) => {
      setEvents(res.data);
    });

  return (
    <div className="container">
      <h2 className="text-center mt-5">All Events</h2>
      <div className="row">
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Event Title</th>
              <th>Event Description</th>
              <th>Event Date</th>
              <th>Category</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {events.map((event, index) => (
              <tr key={event.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{event.eventTitle}</td>
                <td>{event.eventDescription}</td>
                <td>{event.eventDate}</td>
                <td>{event.category}</td>
                <td className="mx-2">
                  <Link className="btn btn-warning" to={`/edit-event/${event.id}`}>Edit</Link>
                </td>
                <td className="mx-2"><button className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEventComponent;
