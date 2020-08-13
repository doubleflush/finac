import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TileReducer from './TileReducer';
const config = {
  key: "root",
  storage,
  blacklist: ["SpinnerReducer"],
};

export default persistCombineReducers(config, {
  TileReducer,
});
