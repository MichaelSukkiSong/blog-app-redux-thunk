import jsonplaceholder from "../apis/jsonPlacehilder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatchEvent({ type: "FETCH_POSTS", payload: response });
};
