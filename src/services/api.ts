import axios from "axios";

const BASE_URL = "http://192.168.0.107:3001";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { api };

