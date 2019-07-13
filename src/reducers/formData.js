import { UPDATE_FORM, UPDATE_ADDRESSEE } from "../actions/message";

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
    default:
      return state;
  }
};
