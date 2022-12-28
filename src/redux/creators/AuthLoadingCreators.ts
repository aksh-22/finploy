import { AUTH_LOADING_STATUS } from "../types";

export function setAuthLoading(AuthLoading: boolean) {
  return {
    type: AUTH_LOADING_STATUS,
    payload: AuthLoading,
  };
}
