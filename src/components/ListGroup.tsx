import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "France"];
  
  //Hook
  // useState returns an array
  // arr[0] = variable
  // arr[1] = updater function
   
  const [selectedIndex, setSelectedIndex] = useState(-1)

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <Fragment>
      <h1>Test Block</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index) }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
