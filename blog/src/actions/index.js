import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispach) => {
  const res = await jsonPlaceholder.get("/posts");

  dispach({ type: "FETCH_POST", payload: res });
};
