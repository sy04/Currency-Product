import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./reducers/userReducer"
import { productsReducer } from "./reducers/productReducer"

const reducer = combineReducers({
    user: userReducer,
    product: productsReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store