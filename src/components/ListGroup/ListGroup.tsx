import { useState } from "react";

import styles from "./ListGrout.module.css";

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

      {/* <ul className="list-group "> */}
      {/* <ul className={styles["list-group"]}> */}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
