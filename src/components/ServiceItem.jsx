const ServiceItem = ({ item, handleRemove, handleEdit }) => {
  return (
    <li className="list_item">
      <div className="list_wrapper">{item.name}</div>
      <div className="list_wrapper">{item.price}</div>
      <button
        className="btn btn_edit"
        onClick={() => {
          handleEdit(item);
        }}
      ></button>
      <button
        className="btn btn_remove"
        onClick={() => {
          handleRemove(item.id);
        }}
      ></button>
    </li>
  );
};

export default ServiceItem;
