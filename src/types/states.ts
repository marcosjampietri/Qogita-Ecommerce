import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Product } from "./index";


/**
 * Type for async action creation using Redux-Thunk.
 */


export interface storeType {
    Product: Product;
}

export interface typingActionTP {
    obj: { type: "TOGGLE_NAV", payload: string };
}

export interface navActionTP {
    obj: { type: "TOGGLE_NAV" };
}

export type allActions = navActionTP | typingActionTP;

export type actionCreator<allActions extends Action> = (arg?: any) => ThunkAction<
    void,
    storeType,
    {},
    allActions
>;