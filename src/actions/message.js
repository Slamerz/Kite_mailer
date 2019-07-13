export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_ADDRESSEE = "UPDATE_ADDRESSEE";

export const message = data => dispatch => {
  if (data[0] === "firstName" || data[0] === "lastName") {
    return dispatch({
      type: UPDATE_ADDRESSEE,
      payload: data
    });
  } else {
    return dispatch({ type: UPDATE_FORM, payload: data });
  }
};
