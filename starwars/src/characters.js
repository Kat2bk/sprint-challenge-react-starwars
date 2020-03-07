import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid yellow;
  background-color: rgba(30, 20, 30, 0.4);
  color: yellow;
`;

export default function Characters(props) {
  return (
    <Box>
      <h3>Name: {props.data.name}</h3>
      <h3>Year of Birth: {props.data.birth_year}</h3>
      <h3>Gender: {props.data.gender}</h3>
    </Box>
  );
}
