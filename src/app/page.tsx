import React from 'react';
import { currentUser, SignOutButton } from '@clerk/nextjs';

const Home = async () => {
  const user = await currentUser();

  if (!user) return <div className=''>no user</div>;
  else
    return (
      <div className=''>
        Welcome {user.firstName} {user.lastName}
        <SignOutButton />
      </div>
    );
};

export default Home;
