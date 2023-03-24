import axios from "axios";

const env = process.env.NODE_ENV;

const url =
  env === "development"
    ? "http://127.0.0.1:8000/"
    : "https://tina20server-production.up.railway.app/";

const generate_response = axios.create({
  baseURL: url,
});

export default generate_response;
