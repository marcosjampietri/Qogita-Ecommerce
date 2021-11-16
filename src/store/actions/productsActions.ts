import axios from "axios";
import { actionCreator } from "../../types";

export const getProductsListAction: actionCreator<any> = (pgN: number) => async (
    dispatch: any,
    getState: any
) => {

    const url = process.env["NODE_ENV"] === "development"
        ? "http://localhost:3000"
        : "";

    const productsUrl = () => `${url}/api/products`;

    const { data: productsList } = await axios({
        url: productsUrl(),
        method: 'get',
        params: {
            page: pgN
        }
    }
    );

    dispatch({
        type: "FETCH_PRODUCTS",
        payload: productsList,
    });

};