// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const spaceXClient = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
});