import { ParamsModel } from '../types';
import { getInstance } from "./generalInstance";

const launchesInstance = getInstance();

export const LaunchesService = {
  pastLaunches(params: ParamsModel) {
    return launchesInstance.get<any, any>("/past", {
      params: { ...params },
    });
  },
  upcomingLaunches(params: ParamsModel) {
    return launchesInstance.get<any, any>("/upcoming", {
      params: { ...params },
    });
  },
};
