import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();
const api = import.meta.env.VITE_GRAPHCMS_API;

const client = new ApolloClient({
  cache,
  uri: api,
});

export const provider = createApolloProvider({
  defaultClient: client,
});
