import { legacy_createStore as createStore, combineReducers } from "redux";
import reducerForm from "../reducer/serviceAdd";
import reducerList from "../reducer/serviceList";
import reducerFilter from "../reducer/serviceFilter";

const reducer = combineReducers({
  serviceAdd: reducerForm,
  serviceList: reducerList,
  serviceFilter: reducerFilter,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
