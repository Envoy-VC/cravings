import React from 'react';
import { currentUser, SignOutButton } from '@clerk/nextjs';

const Home = async () => {
  const user = await currentUser();
  return (
    <>
      {user && (
        <div className=''>
          Welcome {user.firstName} {user.lastName}
          <SignOutButton />
        </div>
      )}
      {!user && <div className='h-[400vh]'>no user</div>}
    </>
  );
};

export default Home;
