import { split, ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: "bearer d4a80ce7aa748543e84b23cebdcfc7256492f119",
    },
  };
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]) as any,
  cache: new InMemoryCache(),
});
