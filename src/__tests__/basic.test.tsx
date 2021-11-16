// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import { configure, shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new EnzymeAdapter() });

import React from "react";
import Home from "../pages/index";
import Cart from "../pages/cart/index";
import Cards from "../components/ProductsCards";

const findByTestAttr = (wrapper: any, val: string) =>
    wrapper.find(`[data-test='${val}']`);

it(" should render the Home page without errors", () => {
    const setup = () => shallow(<Home />);
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-home");
    expect(homeComp.length).toBe(1);
});

{
    /* it(" should render the Cart component without errors", () => {
    const setup = () => shallow(<Cart />);
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-cart");
    expect(homeComp.length).toBe(1);
});

it(" should render the Cards list component without errors", () => {
    const setup = () => shallow(<Cards />);
    const wrapper = setup();
    const homeComp = findByTestAttr(wrapper, "comp-cards");
    expect(homeComp.length).toBe(1);
}); */
}
