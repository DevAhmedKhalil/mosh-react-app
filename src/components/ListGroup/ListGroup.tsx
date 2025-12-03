import { useState } from "react";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? "lightblue" : "white")};
  cursor: pointer;
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem(item: string): void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // State Hook
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

      {items.length > 0 && <p>Showing {items.length} cities</p>}

      <List>
        {items.map((city, index) => (
          <ListItem
            active={index === selectedIndex}
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
