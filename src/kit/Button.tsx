import { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}
const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <Container>
      <ButtonElement onClick={onClick} disabled={disabled}>
        {text}
      </ButtonElement>
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
const ButtonElement = styled.button(({ disabled }) => ({
  width: "60%",
  height: "40px",
  background: disabled ? "gray" : "blueviolet",
  border: "none",
  borderRadius: "8px",
  boxShadow: "1px 1px black",
  color: "white",
  fontWeight: 600,
  transition: "0.2s ease-in",
  cursor: disabled ? "default" : "pointer",
  "&:hover": {
    background: disabled ? "gray" : "violet",
  },
}));
