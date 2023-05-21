import { Fragment, useState } from "react";
import styled from "styled-components";

const List  = styled.ul`
 list-style: none;
 padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li <ListItemProps>`
  padding: 5px 0;
  background: ${ props => props.active ? 'blue' : 'none'}
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

  const [selectedIndex, setSelectedIndex] = useState(0);

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active = {index == selectedIndex}
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
