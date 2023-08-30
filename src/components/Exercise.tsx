import { FC } from "react";
import styled from "styled-components";

interface ExerciseProps {
  data: any;
}

const Exercise: FC<ExerciseProps> = ({ data }) => {
  return (
    <Container>
      <Header>{data.name}</Header>
      <Details>
        <Data>Type: {data.type}</Data>
        <Data>Muscle: {data.muscle}</Data>
        <Difficulty difficulty={data.difficulty}>
          Difficulty: {data.difficulty}
        </Difficulty>
      </Details>
    </Container>
  );
};

export default Exercise;

const Container = styled.div({
  width: "250px",
  height: "250px",
  background: "white",
  borderRadius: "8px",
  boxSizing: "border-box",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const Header = styled.div({
  width: "100%",
  fontWeight: 600,
  textAlign: "center",
});
const Details = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
const Data = styled.div({
  width: "100%",
  border: "1px solid black",
  borderRadius: "8px",
  padding: "10px",
  boxSizing: "border-box",
});
const Difficulty = styled(Data)<{ difficulty: string }>(({ difficulty }) => ({
  background:
    difficulty === "beginner"
      ? "green"
      : (difficulty = "intermediate" ? "yellow" : "red"),
}));
