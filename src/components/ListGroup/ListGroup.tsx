import { Fragment, useState } from "react";
import styles from './ListGroup.module.css';
import styled from "styled-components";

const List  = styled.ul`
 list-style: none;
 padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  // useState returns an array
  // arr[0] = variable
  // arr[1] = updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default ListGroup;
