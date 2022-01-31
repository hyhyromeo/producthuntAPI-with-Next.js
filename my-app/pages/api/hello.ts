import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new ApolloClient({
    uri: "https://api.producthunt.com/v2/api/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: "Bearer EdfavslzA6eH1bRy7s_u2v-IDT-PApdzyqgLQtzxvCM",
    },
  });

  const { data } = await client.query({
    query: gql`
      ${JSON.parse(req.body).query}
    `,
  });
  res.status(200).json({ data: data });
}
