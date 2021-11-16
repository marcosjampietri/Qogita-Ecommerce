import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { getProductsListAction } from "../store/actions/productsActions";
import { addToBasket } from "../store/actions/cartActions";

import { useTypedSelector, AppState } from "../store/reducers/_rootReducer";
import { Product } from "../types";

const ProductsCards = () => {
    const dispatch = useDispatch();

    const { productsAll } = useTypedSelector((state: AppState) => state.prods);

    useEffect(() => {
        dispatch(getProductsListAction());
    }, []);

    return (
        <Table data-test="comp-cards">
            {productsAll.map((product: Product, index: number) => (
                <ProductCard
                    key={index}
                    onClick={() => {
                        dispatch(addToBasket(product));
                    }}
                >
                    <Image src={product.imageUrl} />
                    <Description>
                        <h2>{product.name}</h2>
                        <h3>
                            <span>€</span>
                            {product.recommendedRetailPrice}
                        </h3>
                    </Description>
                    <Add className="add">
                        <h3>ADD TO CART</h3>
                    </Add>
                </ProductCard>
            ))}
        </Table>
    );
};

export default ProductsCards;

const Table = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductCard = styled.div`
    background: white;

    margin: 1vw;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 280px;

    border: 1px solid hsla(0, 0%, 80%, 0.5);
    border-radius: 10px;
    box-shadow: 1px 1px 10px hsla(0, 0%, 50%, 0.3);
    cursor: pointer;

    :hover > .add {
        transition: 0.05s;
        color: black;
        background: white;
        border: 2px solid black;
    }
`;
const Image = styled.img`
    max-width: 100%;
    height: 250px;
    margin: 10px auto;

    object-fit: cover;
    object-position: center center;
`;

const Button = styled.button`
    background-color: blue;
    margin: 2px;
`;

const Add = styled.div`
    background-color: blue;
    width: 50%;
    height: 50px;
    margin: 10px auto;

    color: white;
    background: black;
    border: 2px solid black;
    transition: 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
        margin: 5px;
    }
`;

const Description = styled.div`
    margin: 10px;

    text-align: center;
    letter-spacing: 0.1em;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h2 {
        margin: 10px 0px;
        min-height: 80px;
        font-weight: 200;
        font-size: clamp(1.1em, 1.5vw, 1.3em);
        color: hsla(0, 0%, 40%, 1);
    }

    h3 {
        justify-self: end;
        margin: 10px 0px;
        font-weight: 600;
        font-size: clamp(1em, 1.7vw, 1.5em);
        color: hsla(0, 90%, 50%, 1);

        span {
            margin: 0px 5px;
            color: hsla(0, 80%, 50%, 1);
        }
    }
`;
