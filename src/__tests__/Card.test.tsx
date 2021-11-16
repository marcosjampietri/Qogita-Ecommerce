import moxios from "moxios";

import { storeFactory } from "../jestUtils";
import { getSugestionsList } from "../store/actions/sugestActions";

describe("getSugestionsList", () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test("secretWord is returned", () => {
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: "party",
            });
        });

        return getSugestionsList().then(() => {
            const secretWord = store.getState().secretWord;
            expect(secretWord).toBe("party");
        });
    });
});
