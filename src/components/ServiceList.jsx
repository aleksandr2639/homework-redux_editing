import { useSelector, useDispatch } from "react-redux";
import { removeList, editFieldList } from "../actions/actionCreators";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ServiceItem from "./ServiceItem";

const ServiceList = () => {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(items);
  });

  const handleRemove = (id) => {
    dispatch(removeList(id));
  };

  const handleEdit = (item) => {
    dispatch(editFieldList(item.id, item.name, item.price));
  };

  return (
    <ul className="list">
      {items.map((item) => (
        <ServiceItem
          item={item}
          key={uuidv4()}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default ServiceList;
