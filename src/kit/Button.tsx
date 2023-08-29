import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Container>
      <ButtonElement onClick={onClick}>{text}</ButtonElement>
    </Container>
  );
};

export default Button;

const Container = styled.div({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ButtonElement = styled.button({
  width: "60%",
  height: "40px",
  background: "blueviolet",
  border: "none",
  borderRadius: "8px",
  boxShadow: "1px 1px black",
  color: "white",
  fontWeight: 600,
  transition: "0.2s ease-in",
  "&:hover": {
    background: "violet",
  },
});
