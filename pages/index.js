import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client';

import Fullbody from '../components/fullbody'
import Layout from '../components/layout'

import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();
  const [ session, loading ] = useSession()

  return (
      <Layout>
          {/* {!session ? <><p>
          Not signed in </p>
          <button onClick={signIn}>Sign in</button></>
          :
          <><p>Signed in as {session.user.email} <br/>
          <button onClick={signOut}>Sign out</button>
        </p></>} */}
          <Fullbody />
      </Layout>
    )
}
