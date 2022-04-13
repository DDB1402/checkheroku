import { get, post } from "./apiClient";

// auth
export const login = (payload) => post("authen/login", payload);

export const signup = (payload) => post("authen/signup", payload);

export const relogin = (payload) => post("authen/re_login", payload);

export const refreshToken = (payload) => post("authen/refresh_token", payload);

// User
export const getUserFriendList = (payload) => get("user/friendList");

export const editUser = (payload) => post("user/editUser", payload);

export const searchUser = (payload) =>
  get(`user/searchUser?${payload.queryParams}`);

export const sendRequestAddFriend = (payload) =>
  post("notification/insertNewFriendRequest", payload);

// conversation
export const getConversations = (payload) =>
  get("conversation/getConversations");

export const getSpecificConversation = (payload) =>
  get(`conversation/getSpecificConversation/${payload.id_conversation}`);

export const addUsersToConversation = (payload) =>
  post("conversation/addUsersToConversation", payload);

export const createGroupChat = (payload) =>
  post("conversation/createGroupChat", payload);

// message
export const sendMessage = (payload) => post("message/sendMessage", payload);

export const getMessage = (payload) =>
  get(`/message/getMessages?${payload.queryParams}`);

// Sticker
export const getListStickerCategory = () => get("/upload/getIconCategory");

export const getListStickerByCategory = (payload) =>
  get(`/upload/getIconByCategory/${payload.id_category}`);

// notification
export const getAllNotification = () => get("notification/getAllNotification");
export const answerFriendRequest = (payload) =>
  post("notification/answerFriendRequest", payload);
