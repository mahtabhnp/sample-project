import axios from "axios";
import { get } from "lodash";

export function responseInterceptors(response: any) {
  if ([200, 201].includes(response.status)) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
}

export function responseError(error: any) {
  if (!axios.isCancel(error)) {
    const msg = get(error, "response.data.message", "");

    console.log(msg || get(error, "response.data.message", "Unknown Error!!!"));
  } else {
    throw new Error(error.statusText);
  }
}
