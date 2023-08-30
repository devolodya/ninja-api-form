import { FC, ChangeEvent, MouseEvent } from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  hasClear?: boolean;
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  onChange,
  label,
  value,
  hasClear = false,
  onClear,
}) => {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        <InputElement
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
        {hasClear && value.length > 0 && (
          <ClearIcon onClick={onClear}>❌</ClearIcon>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;

const Container = styled.div({
  position: "relative",
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
});
const InputContainer = styled.div({
  width: "100%",
  height: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const InputElement = styled.input({
  width: "80%",
  height: "40px",
  borderRadius: "8px",
  outline: "none",
  border: "none",
  paddingLeft: "10px",
  fontSize: "16px",
  boxSizing: "border-box",
  boxShadow: "1px 1px black",
});
const InputLabel = styled.div({
  width: "80%",
  height: "20px",
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
});
const ClearIcon = styled.button({
  width: "20px",
  height: "20px",
  position: "absolute",
  right: "15%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "none",
  background: "none",
});
