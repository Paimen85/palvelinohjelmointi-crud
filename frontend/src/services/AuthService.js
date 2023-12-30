import axios from "axios";

const AUTH_REST_API_BADE_URL = "http://localhost:8080/api/v1/auth"

class AuthService {
    signUpApiCall(newUser) {
        return axios.post(AUTH_REST_API_BADE_URL + "/sign-up", newUser)
    }
}

export default new AuthService()