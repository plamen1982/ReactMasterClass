import { createStore, compose } from "redux";
import { autoRehydrate } from "redux-persist";

import rootReducer from "./reducers";

export default createStore(rootReducer, undefined, compose(autoRehydrate()));
