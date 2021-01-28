import axios from "axios";
import {
  GET_EVENTS,
  GET_ERRORS,
  DELETE_EVENT,
  GET_EVENT_BY_USER,
  DELETE_EVENT_BY_USER
} from "./types";

export const getEvents = () => async dispatch => {
  const res = await axios.get("/api/events/all");
  dispatch({
    type: GET_EVENTS,
    payload: res.data
  });
};

export const getEventByUser = userId => async dispatch => {
  const res = await axios.get(`/api/events/${userId}`);
  dispatch({
    type: GET_EVENT_BY_USER,
    payload: res.data
  });
};

export const createEvent = (event, history) => async dispatch => {
  try {
    await axios.post("/api/events", event);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const createSubscription = (subscription, history) => async dispatch => {
  try {
    let res = await axios.post("/api/events/subs", subscription);

    if (window.confirm(`You are ${res.data} days away from the event.`)) {
      history.push("/mydashboard");
    }
  } catch (e) {
    console.log(e);
  }
};

export const createUser = (user, history) => async dispatch => {
  try {
    await axios.post("/api/users/register", user);
    history.push("/mydashboard");
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: e.response.data
    });
  }
};

export const deleteEvent = eventId => async dispatch => {
  if (
    window.confirm(`This action is irreversible. Delete Event id ${eventId}`)
  ) {
    await axios.delete(`/api/events/${eventId}`);
    dispatch({
      type: DELETE_EVENT,
      payload: eventId
    });
  }
};

export const unsubscribed = (userId, eventId) => async dispatch => {
  if (window.confirm(`Are you sure you want to unsubscribe from this event?`)) {
    await axios.delete(`/api/events/${userId}/${eventId}`);
    dispatch({
      type: DELETE_EVENT_BY_USER,
      payload: eventId
    });
  }
};
