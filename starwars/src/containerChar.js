import React from "react";
import Characters from "./characters";
import styled from "styled-components";

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 5px;
`;

export default function Container(props) {
  return (
    <FlexBox>
      {props.postdata.map((item, index) => (
        <Characters key={index} data={item} />
      ))}
      ;
    </FlexBox>
  );
}
