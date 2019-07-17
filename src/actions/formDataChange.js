import { UPDATE_ADDRESSEE, UPDATE_FORM, UPDATE_PHOTOS } from "./constants";

export const updateForm = data => ({
  type: UPDATE_FORM,
  payload: { data }
});

export const updateAddressee = data => ({
  type: UPDATE_ADDRESSEE,
  payload: { data }
});

export const updatePhotos = data => ({
  type: UPDATE_PHOTOS,
  payload: { data }
});
export function formDataChange(data) {
  return dispatch => {
    switch (data[0]) {
      case "firstName" || "lastName":
        return dispatch(updateAddressee(data));

      case "photos":
        return dispatch(updatePhotos(data));

      default:
        return dispatch(updateForm(data));
    }
  };
}
