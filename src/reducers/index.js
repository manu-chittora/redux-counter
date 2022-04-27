//import all reducers in this index.js reducer.... i.e. root reducer
import changeNumber from "./plusminus";
import {combineReducers} from "redux";
const rootreducer=combineReducers({
    changeNumber
});
export default rootreducer;