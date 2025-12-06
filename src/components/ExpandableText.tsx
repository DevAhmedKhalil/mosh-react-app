import React from "react";
import { is } from "./../../node_modules/immer/src/utils/common";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const visibleText = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div>
      {visibleText}...{" "}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>{" "}
    </div>
  );
};

export default ExpandableText;
