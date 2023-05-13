import { Fragment } from "react";

function ListGroup() {
  let  items = ["New York", "San Francisco", "Tokyo", "France"];
    items = []

  return (
    <Fragment>
      <h1>Test Block</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
