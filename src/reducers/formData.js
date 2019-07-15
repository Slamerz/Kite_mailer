import {
  UPDATE_FORM,
  UPDATE_ADDRESSEE,
  UPDATE_PHOTOS
} from "../actions/formDataChange";

const initialState = {
  id: "",
  senderId: "",
  addresseeId: "",
  facilityName: "",
  status: "",
  addressee: { firstName: "", lastName: "" },
  address: "",
  unit: "",
  message: "",
  photos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return { ...state, [action.payload[0]]: action.payload[1] };
    case UPDATE_ADDRESSEE:
      let stateCopy = { ...state };
      stateCopy.addressee[action.payload[0]] = action.payload[1];
      return stateCopy;
    case UPDATE_PHOTOS:
      let copyState = { ...state };
      copyState.photos[action.payload[0]] = action.payload[1];
      return copyState;
    default:
      return state;
  }
};
