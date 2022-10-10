import api from "./api";

export async function list() {
  const response = await api.get("/surveys");
  return response.data;
}
export async function getSurvey(id) {
  const response = await api.get(`/surveys/${id}`);
  return response.data;
}
export async function postSurvey(data) {
  const response = await api.post(`/surveys/`, data);
  return response.data;
}
