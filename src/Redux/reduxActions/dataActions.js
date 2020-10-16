import { DELETE_DATA, SET_COMPLETED, SET_DATA } from "../actionTypes";

export const addData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const setComplete = (id) => (dispatch) => {
  dispatch({
    type: SET_COMPLETED,
    payload: id,
  });
};

export const deleteData = (id) => (dispatch) => {
  dispatch({
    type: DELETE_DATA,
    payload: id,
  });
};
