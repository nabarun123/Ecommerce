// AxiosInstance means we are just creating a new axios call.

import axios from "axios";
import { API_BASE_URL } from "../config/Config";

axios.defaults.headers.common["Content-Type"] = "application/json";
// the content that we will "send" to frontend to backend those will be only JSON data.
axios.defaults.headers.common["Accept"] = "application/json";
// the content that we will "accept" from backend to frontend those will be only JSON data.

// headers are something that are acting as a varifying agent.
// everytime when we make an API call we are expecting the call in JSON format.
// data only in JSON.
// everytime we have to share the APIs.

export const AxiosInstance = axios.create({ baseURL: API_BASE_URL });

// through this "create" method we are initialising the API call.
// axios.create is a method that allows you to create a API call, it just makes an API call,
// acts as a middleware, They just start the process.
