import styled from "styled-components";

import Layout from "../components/Layout";
import Cards from "../components/ProductsCards";

const HomePage = () => (
    <Layout data-test="comp-home">
        <Page>
            <h1>Products</h1>
        </Page>
        <Cards />
    </Layout>
);

export default HomePage;

const Page = styled.div`
    margin: 20px auto;
    padding-bottom: 30px;
    border-bottom: 1px solid grey;

    display: flex;
    justify-content: space-between;

    h1 {
        font-weight: 600;
        font-size: clamp(2em, 4vw, 3em);
        color: hsla(0, 0%, 40%, 1);
    }
`;
