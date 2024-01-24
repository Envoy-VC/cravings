/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANT_BY_OWNER } from '~/lib/graphql';

import { useUser } from '@clerk/nextjs';

const PartnerPage = () => {
  const { user } = useUser();
  const { data } = useQuery(GET_RESTAURANT_BY_OWNER, {
    variables: {
      owner: user?.id ?? '',
    },
  });

  if (user && user.publicMetadata.role !== 'partner') {
    return (
      <div>
        <div>Sign Up to become a Partner </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>Partner Page</div>
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }
};

export default PartnerPage;
