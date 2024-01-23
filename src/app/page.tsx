import React from 'react';
import { Navbar } from '~/components/common';
import { currentUser, SignOutButton } from '@clerk/nextjs';

const Home = async () => {
  const user = await currentUser();
  return (
    <>
      <Navbar />
      {user && (
        <div className=''>
          Welcome {user.firstName} {user.lastName}
          <SignOutButton />
        </div>
      )}
      {!user && <div className=''>no user</div>}
    </>
  );
};

export default Home;
