import { FILTER_FIELD } from "../actions/actionTypes";

const initialState = {
  items: [],
  filter: "",
};

const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_FIELD: {
      const { filter, list } = action.payload;
      return {
        ...state,
        items: list.filter((item) =>
          item.name.toUpperCase().includes(filter.toUpperCase())
        ),
        filter: filter,
      };
    }
    default:
      return state;
  }
};

export default reducerFilter;
