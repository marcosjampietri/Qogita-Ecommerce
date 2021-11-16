import { createStore, applyMiddleware } from "redux";

import rootReducer from "./store/reducers/_rootReducer";
{
    /* import { middlewares } from "./store/index"; */
}

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState: any) => {
    return createStore(rootReducer, initialState, applyMiddleware());
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: any, val: any) => {
    return wrapper.find(`[data-test="${val}"]`);
};
