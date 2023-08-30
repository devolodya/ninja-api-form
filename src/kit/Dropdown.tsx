import { FC } from "react";
import styled from "styled-components";

import { keyGenerator } from "../utils";

interface DropProps {
  data: Array<string>;
  onClick: (item: string) => void;
}

const Dropdown: FC<DropProps> = ({ data, onClick }) => {
  return (
    <Container>
      {data.map((item: string) => (
        <Row key={keyGenerator()} onClick={() => onClick(item)}>
          {item}
        </Row>
      ))}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div({
  position: "absolute",
  top: "75px",
  width: "80%",
  maxHeight: "160px",
  background: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  paddingTop: "8px",
  boxShadow: "1px 1px black",
  overflow: "auto",
  boxSizing: "border-box",
  zIndex: 999,
});
const Row = styled.div({
  width: "90%",
  minHeight: "36px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
  paddingLeft: "16px",
  cursor: "pointer",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#F6F2FF",
  },
});
