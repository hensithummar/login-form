import { EMPTYLOGINFORM, SETINTOFORM } from "./login.types";

export const setIntoForm = (payload) => {
  return { type: SETINTOFORM, payload };
};

export const emptyLoginForm = (payload) => {
  return { type: EMPTYLOGINFORM, payload };
};
