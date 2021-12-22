export function requestInterceptors(request: any) {
  return request;
}

export function requestError(error: any) {
  return Promise.reject(error);
}
