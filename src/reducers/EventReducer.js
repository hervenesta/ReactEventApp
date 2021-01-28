import {
  GET_EVENTS,
  DELETE_EVENT,
  GET_EVENT_BY_USER,
  DELETE_EVENT_BY_USER
} from "../actions/types";

const initialState = {
  events: [],
  eventsByUser: []
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case GET_EVENT_BY_USER:
      return {
        ...state,
        eventsByUser: action.payload
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.eventId !== action.payload)
      };
    case DELETE_EVENT_BY_USER:
      return {
        ...state,
        eventsByUser: state.eventsByUser.filter(
          ev => ev.eventId !== action.payload
        )
      };
    default:
      return state;
  }
};
export default getData;
