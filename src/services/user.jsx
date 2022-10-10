import api from "./api";

export async function postUser(data) {
  const response = await api.post("/users", data);
  return response.data;
}
export async function getUser(id) {
  const response = await api.get(`/users/${id}`);
  return response.data;
}
export async function authUser(data) {
  const response = await api.post(`/auth/login`,data);
  return response.data;
}
