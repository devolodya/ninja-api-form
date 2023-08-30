import { FC } from "react";
import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Home, Result } from "./pages";

const App: FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Container>
  );
};

export default App;

const Container = styled.div({
  width: "100%",
  height: "100vh",
  background: "orange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
