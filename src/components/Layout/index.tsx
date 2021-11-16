import Link from "next/link";
import styled from "styled-components";

import { ImCart } from "react-icons/im";
import { useTypedSelector, AppState } from "../../store/reducers/_rootReducer";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    const yourCart = useTypedSelector((state: AppState) => state.cart);

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between">
                <strong>Qogita</strong>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link href="/">
                                <a className="underline">Products</a>
                            </Link>
                        </li>
                        <Cart>
                            <Link href="/cart">
                                <a className="underline">
                                    Your Cart
                                    <ImCart />
                                    <div>{yourCart.length}</div>
                                </a>
                            </Link>
                        </Cart>
                    </ul>
                </nav>
            </div>
            {children}
        </div>
    );
};

export default Layout;

const Cart = styled.li`
    padding: 10px;

    a {
        position: relative;
        display: flex;

        div {
            position: absolute;
            right: -20px;
            top: -2px;
            width: 20px;
            height: 20px;

            color: white;
            background: hsl(0, 80%, 50%);
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            margin: 0px 5px;
        }
    }
`;
