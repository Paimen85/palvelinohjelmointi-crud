import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EventService from "../services/EventService";

const UpdateEvent = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [event, setEvent] = useState({
    eventTitle: "",
    eventDescription: "",
    eventDate: new Date(),
    category: "",
  });

  useEffect(() => {
    loadEvent(params.id);
  }, []);

  const loadEvent = async (id) =>
    await EventService.getEventByID(id).then((res) => {
      setEvent({ ...res.data, eventDate: new Date(res.data.eventDate) });
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

  const editEvent = async (e) => {
    e.preventDefault();
    await EventService.addEvent(event)
      .then((res) => {
        navigate("/events");
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
              <h2 className="text-center">Edit Event</h2>
              <div className="card-body">
                <form onSubmit={(e) => editEvent(e)}>
                  <div className="form-group mb-3">
                    <label htmlFor="eventTitle" className="form-label">
                      Event Title:
                    </label>
                    <input
                      type="text"
                      name="eventTitle"
                      className="form-control"
                      placeholder="Event Title"
                      value={event.eventTitle}
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
                      value={event.eventDescription}
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
                        (event.eventDate.getMonth() + 1)
                          .toString()
                          .padStart(2, 0) +
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
                        Edit
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

export default UpdateEvent;
