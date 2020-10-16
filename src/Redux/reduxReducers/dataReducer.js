import { DELETE_DATA, SET_COMPLETED, SET_DATA } from "../actionTypes";

const initialState = {
  data: [
    { title: "First Todo", date: "2020/02/03", id: "123", type: "Active" },
    { title: "Second Todo", date: "2020/02/03", id: "124", type: "Completed" },
    { title: "Third Todo", date: "2020/02/03", id: "125", type: "Active" },
  ],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case SET_DATA:
      return {
        ...state,
        data: state.data.concat([actions.payload]),
      };
    case SET_COMPLETED:
      let data = state.data.filter((d) => d.id === actions.payload)[0];
      data.type = "Completed";
      let changedData = state.data.filter(
        (data) => data.id !== actions.payload
      );
      return {
        ...state,
        data: changedData.concat(data),
      };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((data) => data.id !== actions.payload),
      };
    default:
      return state;
  }
}
