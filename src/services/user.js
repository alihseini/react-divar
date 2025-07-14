import api from "../config/api";

const getProfile = async () => {
  const response = await api.get("/user/whoami");
  return response.data;
};

const getPosts = async () => {
  const response = await api.get("/post/my");
  return response;
};

const getAllPosts = async () => {
  const response = await api.get("");
  return response;
};

export { getProfile, getPosts,getAllPosts };
