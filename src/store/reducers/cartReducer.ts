import {
    CartState,
    CartActionType,


} from "../../types";

const initialState: CartState = [];

export const cartReducer = (
    state: CartState = initialState,
    { type, payload }: CartActionType
): CartState => {
    switch (type) {
        case "ADD_TO_CART":
            return state.some((product) => product.gtin === payload.gtin)
                ? state.map((product) => {
                    if (product.gtin === payload.gtin) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }
                    return product;
                })
                : [...state, { ...payload, quantity: 1 }];

        case "REMOVE_FROM_CART":
            return state.filter((product) => product.gtin !== payload);

        case "CLEAR_CART":
            return initialState;

        case "ADD_QTY_ITEM":
            return state.map((product) => {
                if (product.gtin === payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });

        case "MINUS_QTY_ITEM":
            return state.map((product) => {
                if (product.quantity > 0) {
                    if (product.gtin === payload) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }
                } else {
                    state.filter((product) => product.gtin !== payload);
                }
                return product;
            });
        default:
            return state;
    }
};
