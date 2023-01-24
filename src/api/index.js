import axios from "axios";

const api = axios.create({
  baseURL: "https://deno-phenom.deno.dev/",
});

export default api;
