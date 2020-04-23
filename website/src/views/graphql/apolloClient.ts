import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';

const httpLink = new HttpLink({
  // uri: 'https://graphql.nusmods.com/graphql',
  uri: 'http://localhost:8000/graphql',
});

export const link = from([httpLink]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
