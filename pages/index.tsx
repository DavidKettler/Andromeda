import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import type { NextPage } from 'next'
import Head from 'next/head'

import Launches from './spacex'
import styles from '../styles/Home.module.css'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

const Root: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Andromeda Project to learn React, Next & Typescript" />
        {/* TODO <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>
        <p>Below are the details of SpaceX missions.</p>
        <h1>⬇</h1>
      </main>

      <ApolloProvider client={client}>
        <Launches />
      </ApolloProvider>

      <footer className={styles.footer}>
        <p>©2022 davidkettler.dev</p>
      </footer>
    </div>
  )
}

export default Root
