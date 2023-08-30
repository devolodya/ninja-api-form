import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Input } from "../kit";
import Select from "../kit/Select";
import { difficultyValues, muscleValues, typeValues } from "../constants";
import useIsOpenControl from "../hooks/useIsOpenControl";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const { close } = useIsOpenControl();

  const getData = async () => {
    console.log("funct");
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?name=${name}&type=${type}`,
      {
        headers: { "X-Api-Key": "jaZSeyvUm3oP8FPdfktaqg==6SjeepICfPRI7ofv" },
      }
    );
    console.log(response.data);
  };

  const setData = (selector: string, item: string) => {
    if (selector === "type") setType(item);
    if (selector === "muscle") setMuscle(item);
    if (selector === "difficulty") setDifficulty(item);
    close();
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
          disabled={name.length === 0}
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
