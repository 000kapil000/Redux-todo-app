import { createStore } from "redux";

import rootreducers from "./redux_todo/reducers/main";

const store= createStore(rootreducers);

export default store