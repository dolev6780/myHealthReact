import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function LetterAvatars({user}) {
  return (
    <div className='flex justify-evenly items-center bg-white text-green-500 rounded py-2'>
      <Avatar sx={{ bgcolor: "#22c55e",fontWeight:"bold" }}>{user.substring(0,1)}</Avatar>
      <p className='font-bold text-xl'>{user.substring(0,user.indexOf("@"))}</p>
    </div>
  );
}
