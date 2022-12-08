import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();
const api = process.env.GRAPHCMS_API;

const client = new ApolloClient({
  cache,
  uri: api,
});

export const provider = createApolloProvider({
  defaultClient: client,
});
