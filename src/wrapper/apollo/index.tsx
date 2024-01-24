'use client';

import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  defaultDataIdFromObject,
  from,
  createHttpLink,
} from '@apollo/client';

import { relayStylePagination } from '@apollo/client/utilities';

import { useAuth } from '@clerk/nextjs';

import { setContext } from '@apollo/client/link/context';
import { env } from '~/env';

const httpLink = createHttpLink({
  uri: 'https://msajglqtzcodhiblwghz.supabase.co/graphql/v1',
});

export const ApolloProviderWrapper = ({
  children,
}: React.PropsWithChildren) => {
  const { getToken } = useAuth();

  const cache = new InMemoryCache({
    dataIdFromObject(responseObject) {
      if ('nodeId' in responseObject) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `${responseObject.nodeId}`;
      }

      return defaultDataIdFromObject(responseObject);
    },
    typePolicies: {
      Query: {
        fields: {
          todosCollection: relayStylePagination(), // example of paginating a collection
          node: {
            read(_, { args, toReference }) {
              const ref = toReference({
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                nodeId: args?.nodeId,
              });

              return ref;
            },
          },
        },
      },
    },
  });

  const client = React.useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const token = await getToken({ template: 'supabase' });

      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        headers: {
          ...headers,
          apiKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache,
    });
  }, [getToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
