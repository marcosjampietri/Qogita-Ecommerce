import type { AppProps } from "next/app";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../store";
import { Provider } from "react-redux";

import "../styles/global.css";

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    {
        /* wrapped the Component in Provider (in order to make redux management with redux) and PersistGate (to use the persist dependency */
    }

    const store = useStore(pageProps.initialReduxState);

    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={store.__PERSISTOR} loading={null}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    );
};

export default QogitaApp;
