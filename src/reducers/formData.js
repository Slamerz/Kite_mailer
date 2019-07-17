import {
  UPDATE_ADDRESSEE,
  UPDATE_FORM,
  UPDATE_PHOTOS
} from "../actions/constants";

const initialState = {
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
    case UPDATE_FORM: {
      let stateCopy = { ...state };
      stateCopy[action.payload.data[0]] = action.payload.data[1];
      console.log(stateCopy);
      return { ...stateCopy };
    }
    case UPDATE_ADDRESSEE: {
      let stateCopy = { ...state };
      stateCopy.addressee[action.payload.data[0]] = action.payload.data[1];
      return stateCopy;
    }
    case UPDATE_PHOTOS: {
      let copyState = { ...state };
      copyState[action.payload.data[0]].push(action.payload.data[1]);
      return { ...copyState };
    }
    default:
      return state;
  }
};
