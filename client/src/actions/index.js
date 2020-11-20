import axios from "axios";
import history from "../history";
import { FETCH_USER, FETCH_PROBLEM_DATA } from "./types.js";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetch_problem_data = () => async (dispatch) => {
  const response = await axios.get("/api/");
};
