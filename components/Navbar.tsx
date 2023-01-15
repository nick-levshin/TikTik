import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import Logo from '../utils/tiktik-logo.png';
import { createOrGetUser } from '../utils';

const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image className="cursor-pointer" src={Logo} alt="TikTik" />
        </div>
      </Link>

      <div className="">SEARCH</div>

      <div>
        {user ? (
          <div className="">Logged In</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
