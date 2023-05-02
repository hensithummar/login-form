import { combineReducers } from "redux";
import loginReducer from "./login/login.reducer";

const rootReducer = combineReducers({
  form: loginReducer,
});
export default rootReducer;
