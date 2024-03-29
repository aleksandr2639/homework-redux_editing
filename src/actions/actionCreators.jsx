import {
  ADD_LIST,
  EDIT_LIST,
  EDIT_FIELD_LIST,
  REMOVE_LIST,
  CHANGE_FIELD,
  CLEAR_FIELD,
} from "./actionTypes";

export function addList(name, price) {
  return { type: ADD_LIST, payload: { name, price } };
}

export function removeList(id) {
  return { type: REMOVE_LIST, payload: { id } };
}

export function editList(id, name, price) {
  return { type: EDIT_LIST, payload: { id, name, price } };
}

export function editFieldList(id, name, price) {
  return { type: EDIT_FIELD_LIST, payload: { id, name, price } };
}

export function changeField(name, value) {
  return { type: CHANGE_FIELD, payload: { name, value } };
}

export function clearField() {
  return { type: CLEAR_FIELD };
}
