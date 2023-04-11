import axios from "axios";

const env = process.env.NODE_ENV;

const url =
  env === "development"
    ? "http://127.0.0.1:8000/question/"
    : "https://tina20server-production.up.railway.app/question";

const add_question = axios.create({
  baseURL: url,
});

export default add_question;
