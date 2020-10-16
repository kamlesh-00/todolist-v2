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
      state.data.push(actions.payload);
      return {
        ...state,
      };
    case SET_COMPLETED:
      let data = state.data.filter((d) => d.id === actions.payload)[0];
      data.type = "Completed";
      let changedData = state.data.filter(
        (data) => data.id !== actions.payload
      );
      changedData.push(data);
      return {
        ...state,
        data: changedData,
      };
    case DELETE_DATA:
      let a = state.data.filter((data) => data.id !== actions.payload);
      return {
        ...state,
        data: a,
      };
    default:
      return state;
  }
}
