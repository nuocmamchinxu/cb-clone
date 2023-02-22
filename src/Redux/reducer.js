import datas from "./data";
const appReducer = (state = datas, action) => {
  let newEvent;
  switch (action.type) {
    case "ADD_EVENT_SAGA":
      newEvent = [...state];
      newEvent.push(action.payload);
      return newEvent;
    case "DELETE_DATA_SAGA":
      newEvent = [...state];
      newEvent = newEvent.filter((data) => data.id !== action.payload);
      return newEvent;
    case "UPDATE_DATA_SAGA":
      newEvent = [...state];
      let index = -1;
      for (let i = 0; i < newEvent.length; i++) {
        index++;
        if (newEvent[i].id === action.payload.id) {
          break;
        }
        if (index !== -1) {
          newEvent[index] = action.payload;
        }
        return newEvent;
      }
    default:
      return state;
  }
};
export default appReducer;
