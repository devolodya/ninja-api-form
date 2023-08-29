import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../kit";
import Select from "../kit/Select";
import { difficultyValues, muscleValues, typeValues } from "../constants";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const selectTypes = ["type", "muscle", "difficulty"];
  return (
    <Container>
      <FormElement>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name of the exercise"
          label="Enter name:"
          value={name}
          hasClear={true}
          onClear={() => setName("")}
        />
        <Select
          placeholder="Select type from list below"
          label="Select type:"
          dropData={typeValues}
          value={type}
        />
        <Select
          placeholder="Select muscle from list below"
          label="Select muscle:"
          dropData={muscleValues}
          value={muscle}
        />
        <Select
          placeholder="Select difficulty from list below"
          label="Select difficulty:"
          dropData={difficultyValues}
          value={difficulty}
        />
        <Button text="Search" onClick={() => console.log(1)} />
      </FormElement>
    </Container>
  );
};

export default Form;

const Container = styled.div({
  width: "50vw",
  height: "80vh",
  background: "#ededed",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const FormElement = styled.form({
  width: "80%",
  height: "80%",
});
