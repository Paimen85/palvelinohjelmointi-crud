import axios from "axios";
import AuthService from "./AuthService";

const EVENT_API_BASE_URL = "http://localhost:8080/api/v1/events";
//const EVENT_API_BASE_URL = "http://16.171.241.235:8080/api/v1/events";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = AuthService.getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

class EventService {
  getEvents() {
    return axios.get(EVENT_API_BASE_URL);
  }
  addEvent(event) {
    return axios.post(EVENT_API_BASE_URL, event);
  }

  getEventByID(id) {
    return axios.get(EVENT_API_BASE_URL + "/" + id);
  }

  deleteEvenyById(id) {
    return axios.delete(EVENT_API_BASE_URL + "/" + id);
  }
}

export default new EventService();
