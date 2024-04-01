import { useDispatch, useSelector } from "react-redux";
import { filterField } from "../actions/actionCreators";

const ServiceFilter = () => {
  const items = useSelector((state) => state.serviceFilter);
  const list = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const { value } = e.target;
    console.log(value);
    console.log(list);
    dispatch(filterField(value, list));
  };
  return (
    <div>
      <input
        name="name"
        className="filter"
        onChange={handleFilter}
        value={items.filter}
        placeholder="filter"
      />
    </div>
  );
};

export default ServiceFilter;
