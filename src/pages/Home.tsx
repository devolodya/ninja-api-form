import { FC } from "react";
import { styled } from "styled-components";

import { Form } from "../components";

const Home: FC = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

export default Home;

const Container = styled.div({
  width: "100%",
  height: "100vh",
  background: "orange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
