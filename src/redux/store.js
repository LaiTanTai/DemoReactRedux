import { createStore } from "redux"
import { CountReducer } from "./Reducers/CountReducer"
const store = createStore(CountReducer)
export default store