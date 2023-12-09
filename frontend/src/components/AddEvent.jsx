import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventService from "../services/EventService";

const AddEvent = () => {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    eventTitle: "",
    eventDescription: "",
    eventDate: new Date(),
    category: "",
  });

  const changeTitleHandler = (e) => {
    setEvent({ ...event, eventTitle: e.target.value });
  };

  const changeDescriptionHandler = (e) => {
    setEvent({ ...event, eventDescription: e.target.value });
  };

  const changeDateHandler = (e) => {
    setEvent({ ...event, eventDate: new Date(e.target.value) });
  };

  const changeCategoryHandler = (e) => {
    setEvent({ ...event, category: e.target.value });
  };

  const addEvent = async (e) => {
    e.preventDefault();
    await EventService.addEvent(event)
      .then((res) => {
        navigate("/events");
        console.log(event);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-5 offset-md-3">
            <div className="card">
              <h2 className="text-center">Add Event</h2>
              <div className="card-body">
                <form onSubmit={(e) => addEvent(e)}>
                  <div className="form-group mb-3">
                    <label htmlFor="eventTitle" className="form-label">
                      Event Title:
                    </label>
                    <input
                      type="text"
                      name="eventTitle"
                      className="form-control"
                      placeholder="Event Title"
                      value={event.title}
                      onChange={(e) => changeTitleHandler(e)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="eventDescription" className="form-label">
                      Event Description:
                    </label>
                    <input
                      type="text"
                      name="eventDescription"
                      className="form-control"
                      placeholder="Event Description"
                      value={event.description}
                      onChange={(e) => changeDescriptionHandler(e)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="eventDate" className="form-label">
                      Event Date:
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      className="form-control"
                      value={
                        event.eventDate.getFullYear().toString() +
                        "-" +
                        (event.eventDate.getMonth() + 1).toString().padStart(2, 0) +
                        "-" +
                        event.eventDate.getDate().toString().padStart(2, 0)
                      }
                      placeholder="dd-mm-yyyy"
                      min="2020-01-01"
                      max="2030-12-31"
                      required
                      onChange={(e) => changeDateHandler(e)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="eventDescription" className="form-label">
                      Category:
                    </label>
                    <input
                      type="text"
                      name="eventDescription"
                      className="form-control"
                      value={event.category}
                      placeholder="Event Description"
                      required
                      onChange={(e) => changeCategoryHandler(e)}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-2">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                    </div>
                    <div className="col-sm-2">
                      <Link
                        type="submit"
                        className="btn btn-warning"
                        to={"/events"}
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
