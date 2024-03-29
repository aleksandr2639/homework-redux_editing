import { ADD_LIST, EDIT_LIST, REMOVE_LIST } from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4(), name: "Замена стекла", price: 21000 },
  { id: uuidv4(), name: "Замена дисплея", price: 25000 },
  { id: uuidv4(), name: "Замена аккумулятора", price: 4000 },
  { id: uuidv4(), name: "Замена микрофона", price: 2500 },
];

const reducerList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const { name, price } = action.payload;
      return [...state, { id: Date.now(), name, price: Number(price) }];
    }
    case REMOVE_LIST: {
      const { id } = action.payload;
      return state.filter((item) => item.id != id);
    }
    case EDIT_LIST: {
      const editedItem = { ...action.payload };
      editedItem.price = Number(editedItem.price);
      state = state.map((item) =>
        item.id === editedItem.id ? editedItem : item
      );
      return state;
    }

    default:
      return state;
  }
};

export default reducerList;
