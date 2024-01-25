import React from 'react';

import { auth } from '@clerk/nextjs';

const PartnerPage = async () => {
  const { user } = auth();

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
        <div>{JSON.stringify(user)}</div>
      </div>
    );
  }
};

export default PartnerPage;
