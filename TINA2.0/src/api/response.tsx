import axios from "axios";

const generate_response = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default generate_response;
