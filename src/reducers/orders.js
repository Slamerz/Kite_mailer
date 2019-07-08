import {
  FETCH_ORDERS_BEGIN,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE
} from "../actions/constants";

const initialState = {
  orders: [{
    id: "uio2u4oi2u4o",
    senderId: "oi23u4oi2u34ouo2",
    addresseeId: "8361938262",
    facilityName: "Jackson County",
    status: "pending",
    addressee: {
      firstName: "John",
      lastName: "Doe"
    },
    address: "183 south some St",
    unit: "F2",
    message: "Luras messis in aboa!Ubi est fatalis gemna?",
    photos: [
      {}
    ]
  },
    {
      id: "u23io4u23oi4uoi2",
      senderId: "io2u4oi23u",
      addresseeId: "9183764",
      facilityName: "Martin West ",
      status: "approved",
      addressee: {
        firstName: "Jane",
        lastName: "Doe"
      },
      address: "342 East Nothing Rd",
      unit: "8H",
      message: "lettuce combines greatly with shredded lobster. ",
      photos: [
        {}
      ]
    }],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: [...state.orders, ...action.payload.orders] };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        orders: []
      };
    default:
      return state;
  }
};
