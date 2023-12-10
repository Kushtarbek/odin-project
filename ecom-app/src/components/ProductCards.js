import React from 'react'
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";



export default function ProductCards() {
    const httpLink = new HttpLink({
        uri: "https://48p1r2roz4.sse.codesandbox.io",
      });
      
  return (
    <div>ProductCards</div>
  )
}
