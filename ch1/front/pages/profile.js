import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css"></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js"></script>
    </Head>
    <AppLayout>
      <div>프로필</div>
    </AppLayout>
  </>
};

export default Profile;