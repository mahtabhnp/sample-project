import axios from "axios";
import { responseInterceptors } from "./response.interceptor";
import { requestInterceptors, requestError } from "./request.interceptor";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export function getInstance() {
  const instance = axios.create({
    baseURL: `https://api.spacexdata.com/v3/launches`,
    cancelToken: Boolean(source) ? source.token : undefined,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use(requestInterceptors, requestError);
  instance.interceptors.response.use(responseInterceptors);
  return instance;
}
