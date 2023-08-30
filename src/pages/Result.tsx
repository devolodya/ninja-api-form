import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { Exercise } from "../components";

import { keyGenerator } from "../utils";

const Result: FC = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state") || "{}")
  );

  useEffect(() => {
    localStorage.removeItem("state");
  }, []);

  return (
    <Container>
      {(state.length > 0 &&
        state.map((el: any) => (
          <Exercise data={el} key={keyGenerator()} />
        ))) || <RedText>No data!</RedText>}
    </Container>
  );
};

export default Result;

const Container = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
});
const RedText = styled.div({
  fontWeight: 600,
  fontSize: "24px",
  color: "red",
});
