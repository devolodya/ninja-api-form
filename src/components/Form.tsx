import { FC, useState } from "react";
import styled from "styled-components";

import { Button, Input, Select } from "../kit";

import { difficultyValues, muscleValues, typeValues } from "../constants";

import { instance } from "../utils";

const Form: FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const getData = async () => {
    const response = await instance.get(
      `exercises?name=${name}&type=${type}&muscle=${muscle}&difficulty=${difficulty}`
    );
    localStorage.setItem("state", JSON.stringify(response.data));
    window.open("/result", "_blank", "noreferrer");
  };

  const setData = (selector: string, item: string) => {
    if (selector === "type") setType(item);
    if (selector === "muscle") setMuscle(item);
    if (selector === "difficulty") setDifficulty(item);
  };

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
          onSelect={(item) => setData("type", item)}
        />
        <Select
          placeholder="Select muscle from list below"
          label="Select muscle:"
          dropData={muscleValues}
          value={muscle}
          onSelect={(item) => setData("muscle", item)}
        />
        <Select
          placeholder="Select difficulty from list below"
          label="Select difficulty:"
          dropData={difficultyValues}
          value={difficulty}
          onSelect={(item) => setData("difficulty", item)}
        />
        <Button
          type="button"
          text="Search"
          onClick={getData}
          disabled={
            name.length === 0 &&
            type === "" &&
            muscle === "" &&
            difficulty === ""
          }
        />
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
const FormElement = styled.div({
  width: "80%",
  height: "80%",
});
