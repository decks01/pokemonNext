import React, { FC } from "react";

import Head from "next/head";

import { NavBar } from '../ui'

interface Props {
    children: JSX.Element
    title?: string
}

export const Layouts: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
            <title>{title || 'POKEMON'}</title>
            <meta name='author' content="CHRISTIAN OMAR" />
            <meta name='description' content="Informacion sobre pokemon xxxxxx" />
            <meta name='keywords' content="xxxxx. pekemon, pokedex" />
      </Head>


        <NavBar />      

    <main style={{
        padding: '0px 20px'
    }}>
        {children}
    </main>
    </>
  );
};
