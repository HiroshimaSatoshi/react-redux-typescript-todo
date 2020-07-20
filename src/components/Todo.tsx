import * as React from "react";
import "./Todo.css";

type Props = {
  text: string;
  completed: boolean;
  onClick: () => void;
};

const component: React.SFC<Props> = (props: Props) => {
  return (
    <li
      className="task"
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none",
        color: props.completed ? "blue" : "black",
      }}
    >
      {props.text}
    </li>
  );
};

export default component;
