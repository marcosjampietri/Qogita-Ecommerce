import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { productsReducer } from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducer";



const rootReducer = combineReducers({
    prods: productsReducer,
    cart: cartReducer,


});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;