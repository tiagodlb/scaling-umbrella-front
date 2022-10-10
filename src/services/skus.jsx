import api from "./api";

export async function getSku(id) {
    const response = await api.get(`/skus/${id}`)
    return response.data
}
export async function postSku(id, data) {
  const response = await api.post(`/skus/${id}`, data);
  return response.data;
}
export async function deleteSku(id) {
  const response = await api.delete(`/skus/${id}`);
  return response.data;
}
