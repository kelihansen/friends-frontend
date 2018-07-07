import { get, post, put, del } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const USER_URL = `${URL}/me`;

export const postSignin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const postSignup = credentials => post(`${AUTH_URL}/signup`, credentials);
export const getAccountVerified = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});

export const getUserProfile = () => get(USER_URL);
export const putProfile = data => put(USER_URL, data);

export const postShareable = shareable => post(`${USER_URL}/shareables`, shareable);
export const putShareable = (shareableId, data) => put(`${USER_URL}/shareables/${shareableId}`, data);
export const deleteShareable = shareableId => del(`${USER_URL}/shareables/${shareableId}`);

export const getFriends = () => get(`${USER_URL}/friends`);
export const putFriends = email => put(`${USER_URL}/friend-requests/`, email);
export const putFriendsAccept = friendId => put(`${USER_URL}/friends/${friendId}`);
export const getFriendProfile = friendId => get(`${USER_URL}/friends/${friendId}`);
export const deleteFriend = friendId => del(`${USER_URL}/friends/${friendId}`);

export const getFeed = () => get(`${USER_URL}/feed`);