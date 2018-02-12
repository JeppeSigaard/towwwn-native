import { Api } from "../modules/api";
export const getEvents = function(query = {}, ids = []) {
  return (dispatch, getState) => {
    dispatch({ type: "FETCH_EVENTS", status: "pending", payload: ids });
    const state = getState();
    const api = new Api();

    return api
      .get("events", query)
      .then(resp => {
        return dispatch({
          type: "FETCH_EVENTS",
          status: "success",
          payload: resp
        });
      })
      .catch(e => {
        dispatch({ type: "FETCH_EVENTS_FAILED", payload: e });
        return dispatch({
          type: "GET_CAMPAIGNS",
          status: "error",
          payload: ids
        });
      });
  };
};
