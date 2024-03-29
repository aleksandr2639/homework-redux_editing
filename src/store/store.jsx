import { legacy_createStore as createStore, combineReducers } from "redux";
import serviceAdd from "../reducer/serviceAdd";
import serviceList from "../reducer/serviceList";

const reducer = combineReducers({
  serviceAdd: serviceAdd,
  serviceList: serviceList,
});

const store = createStore(reducer);
export default store;
