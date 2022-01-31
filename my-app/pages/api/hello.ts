// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new ApolloClient({
    uri: "https://api.producthunt.com/v2/api/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: "Bearer g4oe_3WAqDxJZyoNeFOaxBzcLHR6DnvaakTLOYa3GFg ",
    },
  });

  const { data } = await client.query({
    query: gql`
      query {
        posts(first: 10) {
          edges {
            node {
              id
              name
              slug
              description
              commentsCount
              reviewsCount
              thumbnail {
                url
              }
              url
            }
          }
        }
      }
    `,
  });
  console.log("data", data.posts);
  res.status(200).json({ data: data.posts });
}
