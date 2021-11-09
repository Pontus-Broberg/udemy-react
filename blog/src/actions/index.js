import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispach, getState) => {
  await dispach(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispach(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispach) => {
  const res = await jsonPlaceholder.get("/posts");

  dispach({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => async (dispach) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);

  dispach({ type: "FETCH_USER", payload: res.data });
};

// OPTIONAL way to only fetch one user at a time, not optimal tho
// This will not allow you to re-fetch a user.

// export const fetchUser = (id) => (dispach) => {
//   _fetchUser(id, dispach);
// };

// const _fetchUser = _.memoize(async (id, dispach) => {
//   const res = await jsonPlaceholder.get(`/users/${id}`);

//   dispach({ type: "FETCH_USER", payload: res.data });
// });
