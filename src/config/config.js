import axios from "axios";

export const API_URL = "https://staging.komunitasmea.com";

const request = axios.create({
  baseURL: `${API_URL}/api`,

  withCredentials: true,
  headers: {
    "Content-Type": " x-www-form-url-encoded",
  },
  // cancelToken: source.token
});

export { request };
