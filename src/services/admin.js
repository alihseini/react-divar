import api from "../config/api";

const addCategory = async (data) => {
  const response = await api.post("category", data);
  return response;
};

export { addCategory };
