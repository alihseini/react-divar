import api from "../config/api";

const getProfile = async () => {
  const response = await api.get("/user/whoami");
  return response;
};

export { getProfile };
