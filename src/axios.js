import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/ecommerce-4d68b/us-central1/api", // THE API (cloud function) URL
});

export default instance;
