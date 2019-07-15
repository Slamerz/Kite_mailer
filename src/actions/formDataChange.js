export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_ADDRESSEE = "UPDATE_ADDRESSEE";
export const UPDATE_PHOTOS = "UPDATE_PHOTOS";

export const formDataChange = data => dispatch => {
  if (data[0] === "firstName" || data[0] === "lastName") {
    return dispatch({
      type: UPDATE_ADDRESSEE,
      payload: data
    });
  } else if (data[0] === "photos") {
    return dispatch({
      type: UPDATE_PHOTOS,
      payload: data
    });
  } else {
    return dispatch({ type: UPDATE_FORM, payload: data });
  }
};
