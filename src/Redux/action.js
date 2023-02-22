export const addEvent = (data, index) => ({
  type: "ADD_EVENT",
  payload: data,
  index,
});

export const addEventSaga = (data) => ({
  type: "ADD_EVENT_SAGA",
  payload: data,
});
// delete theo id
export const deleteEvent = (id) => ({
  type: "DELETE_DATA",
  payload: id,
});

export const deleteEventSaga = (data) => ({
  type: "DELETE_DATA_SAGA",
  payload: data,
});

// update data

export const updateData = (data) => ({
  type: "UPDATE_DATA",
  payload: data,
});

export const updateDataSaga = (data) => ({
  type: "UPDATE_DATA_SAGA",
  payload: data,
});
