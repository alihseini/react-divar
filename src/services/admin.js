import api from "../config/api";

const addCategory = async (data) => {
  const response = await api.post("category", data);
  return response;
};

const deleteCategory = async (id) => {
  const response = await api.delete(`category/${id}`);
  return response;
};

const getCategories = async () => {
  const response = await api.get("category");
  return response.data;
};

export { addCategory, getCategories, deleteCategory };
