import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// Define the URL for the GraphQL API
const endpoint = 'https://countries.trevorblades.com/'; // Replace this with the actual GraphQL endpoint
//https://github.com/trevorblades/countries - docs for countries test API

const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <ApolloProvider client={client}>
    <Navbar/>
    <App />
  </ApolloProvider>
  </>
);
