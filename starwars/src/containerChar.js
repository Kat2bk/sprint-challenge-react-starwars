import React from "react";
import Characters from "./characters";

export default function Container(props) {
  return (
    <div>
      {props.postdata.map((item, index) => (
        <Characters key={index} data={item} />
      ))}
      ;
    </div>
  );
}
