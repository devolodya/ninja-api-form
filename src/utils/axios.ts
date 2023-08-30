import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: { "X-Api-Key": "jaZSeyvUm3oP8FPdfktaqg==6SjeepICfPRI7ofv" },
});
