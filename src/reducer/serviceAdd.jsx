import {
  ADD_LIST,
  EDIT_LIST,
  EDIT_FIELD_LIST,
  CHANGE_FIELD,
  CLEAR_FIELD,
} from "../actions/actionTypes";

const initialState = { name: "", price: "" };

const reducerForm = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case EDIT_FIELD_LIST: {
      return action.payload;
    }
    case ADD_LIST:
    case EDIT_LIST:
    case CLEAR_FIELD: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducerForm;
