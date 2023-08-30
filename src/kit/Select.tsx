import { FC } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useIsOpenControl } from "../hooks";

interface SelectProps {
  placeholder: string;
  label: string;
  dropData: Array<string>;
  value: string;
  onSelect: (item: string) => void;
}

const Select: FC<SelectProps> = ({
  placeholder,
  label,
  dropData,
  value,
  onSelect,
}) => {
  const { isopen, toggle } = useIsOpenControl();

  const clearSelect = (value: any) => (value = "");
  return (
    <Container>
      <SelectLabel>{label}</SelectLabel>
      <SelectContainer>
        <SelectElement onClick={toggle}>
          {(value && <Value>{value}</Value>) || (
            <Placeholder>{placeholder}</Placeholder>
          )}
          {value && (
            <ClearIcon onClick={() => clearSelect(value)}>❌</ClearIcon>
          )}
          <DropIcon isopen={isopen}>🔽</DropIcon>
        </SelectElement>
        {isopen && <Dropdown data={dropData} onClick={onSelect} />}
      </SelectContainer>
    </Container>
  );
};

export default Select;

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
const SelectContainer = styled.div({
  width: "100%",
  height: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const SelectElement = styled.div({
  width: "80%",
  height: "40px",
  borderRadius: "8px",
  outline: "none",
  border: "none",
  paddingLeft: "10px",
  fontSize: "16px",
  boxSizing: "border-box",
  boxShadow: "1px 1px black",
  background: "white",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
const SelectLabel = styled.div({
  width: "80%",
  height: "20px",
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
});
const DropIcon = styled.div<{ isopen: boolean }>(({ isopen }) => ({
  width: "20px",
  height: "20px",
  position: "absolute",
  right: "15%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: isopen ? "rotate(180deg)" : "rotate(0)",
  transition: "0.2s ease-in",
}));
const ClearIcon = styled.div({
  width: "20px",
  height: "20px",
  position: "absolute",
  right: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
const Placeholder = styled.div({
  height: "40px",
  position: "absolute",
  left: "12%",
  color: "gray",
  display: "flex",
  alignItems: "center",
});
const Value = styled.div({
  height: "40px",
  position: "absolute",
  left: "15%",
  display: "flex",
  alignItems: "center",
});
