import { UPDATE_TILE } from "./../dispatchTypes";

const initialState = {
  tile: 'Earnings'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TILE:
      return {
        ...state,
        tile: action.payload
      };
    default:
      return state;
  }
}
