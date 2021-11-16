import { useDispatch } from "react-redux";
import styled from "styled-components";

import Layout from "../../components/Layout";
import { useTypedSelector, AppState } from "../../store/reducers/_rootReducer";
import {
    removeFromBasket,
    addQtyItem,
    minusQtyItem,
} from "../../store/actions/cartActions";
import { Product } from "../../types";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
    const dispatch = useDispatch();

    const yourCart = useTypedSelector((state: AppState) => state.cart);

    const granTotal = (): number =>
        yourCart
            .map(
                (product: Product): number =>
                    product.recommendedRetailPrice * product.quantity
            )
            .reduce((a: any, b: any) => a + b, 0)
            .toFixed(2);

    return (
        <Layout>
            <Page>
                <h1>Shopping Cart</h1>
                <div>
                    <h2>{yourCart.length} Items</h2>
                    <h1>€{granTotal()}</h1>
                </div>
            </Page>
            <Basket>
                {yourCart.map((product: Product, index: number) => (
                    <ProductOnCart key={index}>
                        <Details>
                            <Image src={product.imageUrl} />
                            <h2>{product.name}</h2>
                            <Price>€{product.recommendedRetailPrice}</Price>
                        </Details>
                        <Controls>
                            <Quantity>
                                <Button
                                    onClick={() =>
                                        dispatch(minusQtyItem(product.gtin))
                                    }
                                >
                                    <FaMinus />
                                </Button>

                                <h3>{product.quantity}</h3>
                                <Button
                                    onClick={() =>
                                        dispatch(addQtyItem(product.gtin))
                                    }
                                >
                                    <FaPlus />
                                </Button>
                            </Quantity>

                            <Remove
                                onClick={() => {
                                    dispatch(removeFromBasket(product.gtin));
                                }}
                            >
                                <FaTrashAlt />
                            </Remove>
                        </Controls>
                    </ProductOnCart>
                ))}
            </Basket>
        </Layout>
    );
};

export default CartPage;

const Grid = styled.div`
    display: flex;
`;

const Page = styled.div`
    margin: 20px auto;
    padding-bottom: 30px;
    border-bottom: 1px solid grey;

    display: flex;
    justify-content: space-between;

    h1,
    h2 {
        font-weight: 600;
        font-size: clamp(2em, 4vw, 3em);
        color: hsla(0, 0%, 40%, 1);
    }
`;

const Basket = styled.div``;

const Titles = styled(Grid)``;

const ProductOnCart = styled.div`
    margin: 15px auto;
    width: 100%;
    height: 100%;

    background: white;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 1px 1px 5px grey;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Flex = styled.div``;

const Controls = styled.div`
    justify-self: end;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Details = styled.div`
    width: 50vw;

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 10px;

        font-weight: 200;
        font-size: clamp(0.9em, 1.2vw, 1.2em);
        color: hsla(0, 0%, 40%, 1);
    }
`;

const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        width: 40px;
        height: 40px;

        border: 1px solid hsla(0, 0%, 50%, 0.3);
        box-shadow: inset 1px 1px 5px hsla(0, 0%, 50%, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Price = styled.div``;

const Sub = styled(Flex)``;

const Remove = styled.button`
    margin: 10px;
    width: 50px;
    font-size: 20px;
    color: hsla(240, 50%, 60%, 1);

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    background-color: hsla(240, 50%, 60%, 1);
    margin: 10px;
    width: 20px;
    height: 20px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        fill: white;
    }
`;

const Image = styled.img`
    width: 150px;
    height: 100%;
    margin: 0px 10px;

    object-fit: cover;
    object-position: center center;
`;
