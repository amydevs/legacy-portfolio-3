import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/Home.module.scss'

import IconButton from 'components/IconButton'
import SocialLinks from 'cfg/social'

const Home: NextPage = () => {
  return (
    <div className={`fullscreen ${styles.container}`}>
      <div className={styles.topper}>
        <div className={styles.pfp}>
          <Image width="460" height="460" layout='intrinsic' alt="PFP" src={`https://github.com/${process.env.GH_USERNAME}.png`} />
        </div>
        <div className={`title ${styles.title}`}>Hi, I&apos;m Amy. A student based in Sydney who likes to mess around with music stuff. <br /> Here&apos;s a lil page for my accounts.</div>
      </div>
      <div className={styles.social}>
        {
          SocialLinks.map((link, i) => {
            return (
              <IconButton key={i} {...link} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
