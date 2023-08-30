// better to have endpoint in backend with this data to prevent hardcode.

// first empty element is to remove a value. I choose this way to implement it :)
const typeValues = [
  "",
  "cardio",
  "olympic_weightlifting",
  "plyometrics",
  "powerlifting",
  "strength",
  "stretching",
  "strongman",
];
const muscleValues = [
  "",
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];
const difficultyValues = ["", "beginner", "intermediate", "expert"];

export { typeValues, muscleValues, difficultyValues };
