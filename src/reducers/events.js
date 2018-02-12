import clone from "clone-deep";
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_EVENTS": {
      const newState = clone(state);
      const { status, payload } = action;
      if (status === "success") {
        return [
          ...newState,
          ...payload.map(entry => {
            entry.status = status;
            return entry;
          })
        ];
      } else {
        return [
          ...newState.filter(entry => payload.indexOf(entry.id) === -1),
          ...payload.map(id => {
            let entry = newState.find(en => payload.indexOf(en.id) !== -1);
            if (!entry) {
              entry = { id: id };
            }
            entry.status = status;
            return entry;
          })
        ];
      }
    }
  }
  return state;
}
