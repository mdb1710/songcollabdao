import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/AboutSection'
import HomeHeroSection from '../components/HomeHeroSection'
import HomePageHeader from '../components/HomePageHeader'
import RoadMapSection from '../components/RoadmapSection'
import OldTeamSection from '../components/TeamSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Song Collab DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageHeader />

      <main className='container mx-auto'>
        <div>
          <HomeHeroSection />
          <AboutSection />
          <RoadMapSection />
          <OldTeamSection />
        </div>
      </main>

      
      <footer className={styles.footer}>
        Copyright 2022 SongCollab DAO. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Home
