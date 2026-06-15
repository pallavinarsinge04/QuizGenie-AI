import API from "./axios";

export const createBattle = (data) => {
  return API.post("/battle", data);
};

export const getBattles = () => {
  return API.get("/battle");
};

export const updateBattle = (id, data) => {
  return API.put(`/battle/${id}`, data);
};