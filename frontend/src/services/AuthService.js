import axios from "axios";

const AUTH_REST_API_BADE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {
  signUpApiCall(newUser) {
    return axios.post(AUTH_REST_API_BADE_URL + "/sign-up", newUser);
  }
  loginCall(usernameOrEmail, password) {
    return axios.post(AUTH_REST_API_BADE_URL + "/login", {
      usernameOrEmail,
      password,
    });
  }

  storeToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    localStorage.getItem("token");
  }

  saveLoggedInUser(username) {
    sessionStorage.setItem("authenticatedUser", username);
  }

  isUserLoggedIn() {
    const username = sessionStorage.getItem("authenticatedUser");

    if (username == null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUser() {
    const username = sessionStorage.getItem("authenticatedUser");
    return username
  }
}

export default new AuthService();
