interface ProductsState {
    loading: boolean;
    productsAll: [];
    page: number;

}

const initialState: ProductsState = {
    loading: true,
    productsAll: [],
    page: 1

};

export const productsReducer = (
    state: any = initialState,
    { type, payload }: any
) => {
    switch (type) {

        case "FETCH_PRODUCTS":
            return {
                ...state,
                loading: false,
                productsAll: payload.results,
                page: payload.page

            };
        default:
            return state;
    }
};