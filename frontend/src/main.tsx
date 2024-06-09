import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import { Provider } from 'react-redux';
import {store} from "./store";
import ThemeProvider from "./shared/theme";
import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";
import {BASE_API_URL} from "./core/environment";

const URL= `${BASE_API_URL}graphql`;
const httpLink = new HttpLink({ uri:URL});

const client = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <RouterProvider router={router}/>
                </ApolloProvider>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
);
