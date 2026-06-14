import axios from "axios";

const API = "http://localhost:5000/api/flashcards";

export const getFlashcards = () => axios.get(API);

export const createFlashcard = (data) => axios.post(API, data);

export const updateFlashcard = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteFlashcard = (id) =>
  axios.delete(`${API}/${id}`);