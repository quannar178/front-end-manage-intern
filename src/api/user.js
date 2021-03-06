const request = require("../utils/request");

const login = (data) => {
  console.log(data);
  return request({
    url: "/api/auth/login",
    method: "post",
    data,
  });
};

const logout = () => {
  console.log(token);
  return request({
    url: "/api/auth/logout",
    method: "post",
  });
};

const getInfo = () => {
  return request({
    url: "/api/auth/getinfo",
    method: "post",
  });
};

const getProfile = () => {
  return request({
    url: "api/user/getprofile",
    method: "get",
  });
};

const updateProfile = (data) => {
  return request({
    url: "/api/user/updateprofile",
    method: "put",
    data,
  });
};

const uploadCV = (formData) => {
  return request({
    url: "/api/user/uploadcv",
    method: "post",
    formData,
  });
};

const fogetPassword = (data) => {
  return request({
    url: "/api/auth/forgetpasswordpro",
    method: "post",
    data,
  });
};

const resetPassword = (data, token) => {
  return request({
    url: "/api/auth/resetpasswordpro/" + token,
    method: "post",
    data,
  });
};

const register = (data) => {
  return request({
    url: "/api/auth/register",
    method: "post",
    data,
  });
};

const registerschedule = (data) => {
  return request({
    url: "/api/user/registerschedule",
    method: "post",
    data,
  });
};
const publicschedule = (data) => {
  return request({
    url: "/api/user/publicschedule",
    method: "post",
    data,
  });
};

const getSchedule = (id) => {
  return request({
    url: "/api/user/schedule/" + id,
    method: "get",
  });
};

const downloadCV = (data) => {
  return request({
    url: "/api/user/downloadcv",
    method: "post",
    responseType: "blob",
    data,
  });
};

module.exports = {
  login,
  getInfo,
  getProfile,
  updateProfile,
  uploadCV,
  downloadCV,
  fogetPassword,
  resetPassword,
  register,
  registerschedule,
  publicschedule,
  getSchedule,
};
