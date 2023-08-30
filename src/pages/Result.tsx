import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Exercise } from "../components";

const Result: FC = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("state") || "{}")
  );
  console.log(state);
  useEffect(() => {
    localStorage.removeItem("state");
  }, []);
  return (
    <Container>
      {(state.length > 0 && state.map((el: any) => <Exercise data={el} />)) || (
        <div>No data!</div>
      )}
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
