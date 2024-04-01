import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  addList,
  editList,
  clearField,
} from "../actions/actionCreators";

const ServiceAdd = () => {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name === "") return;

    if (item.id) {
      dispatch(editList(item.id, item.name, item.price));
    } else {
      dispatch(addList(item.name, item.price));
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearField());
  };

  return (
    <form>
      <label>
        <p>Work</p>
        <input
          name="name"
          className="work"
          type="text"
          value={item.name}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label>
        <p>Price</p>
        <input
          name="price"
          type="number"
          className="count"
          value={item.price}
          onChange={handleChange}
          required={true}
        />
      </label>
      <button className="buttons btn-save" onClick={handleSubmit}>
        Save
      </button>
      {item.id && (
        <button className="buttons btn-cancel" onClick={handleClear}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ServiceAdd;
