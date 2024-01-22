import React from 'react';
import { currentUser, SignOutButton } from '@clerk/nextjs';

import { UserProfile } from '@clerk/nextjs';

const Home = async () => {
  const user = await currentUser();

  if (!user) return <div className=''>no user</div>;
  else
    return (
      <div className=''>
        <UserProfile />
        <SignOutButton />
      </div>
    );
};

export default Home;
