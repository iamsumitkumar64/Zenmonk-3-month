"use client"
import HeaderComp from '@/component/Header-comp/header-comp';
import './home.css'
import { useEffect, useState } from 'react';
import { CurrUserInterface } from '@/types/curr-user';
import { ApiCall } from '@/services/http';
import Cookies from "js-cookie";
import { Box, Tooltip } from '@mui/material';

export default function Home() {
  const [user, setUser] = useState<CurrUserInterface>();

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token") || localStorage.getItem("token") || sessionStorage.getItem("token") || '';
      const res = await ApiCall(`${process.env.NEXT_PUBLIC_BACKEND_URL}/fetch_by_token`, 'GET', token);
      setUser(res)
    }
    fetchUser();
  }, []);

  return (
    <>
      <HeaderComp />
      <Box className="user-details">
        <Tooltip arrow title="uuid" className='tooltip'>
          <p>{user?.uuid}</p>
        </Tooltip>
        <Tooltip arrow title="Email" className='tooltip'>
          <p>{user?.email}</p>
        </Tooltip>
        <Tooltip arrow title="Username" className='tooltip'>
          <p>{user?.username}</p>
        </Tooltip>
      </Box>
    </>
  );
}
