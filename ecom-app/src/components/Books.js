// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// // GraphQL query to fetch a list of books
// const GET_BOOKS = gql`
// // write your query here
//   query GET_BOOKS {
//     books {
//       title
//       author
//     }
//   }
// `;

// function Books() 
// {
//   const {data, loading, error} = useQuery(GET_BOOKS);

//   if (loading) 
//     return <div>Loading...</div>;
//   if (error) 
//     return <div>Error</div>;

//   return data.books.map(({title, author}, index) => (
//     <div key={index}>
//       <div>{`${title} by ${author}`}</div>
//     </div>
//   ));
// }


// export default Books;