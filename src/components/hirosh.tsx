import React, { SFC } from "react";
import "./hirosh.css";

type hiroshprops = {
  family: string;
  first: string;
};

export const Hirosh: SFC<hiroshprops> = (props) => {
  return (
    <div className="hirosh">
      I'm {props.family} {props.first}!!
    </div>
  );
};
