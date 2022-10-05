import Head from 'next/head';
import Link from 'next/link';
import style from '../styles/LandingPage.module.css';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>PokeApp - Welcome</title>
      </Head>

      <div className={style.LPcontainer}>
        <h1 className={style.LPtitle}>Welcome to PokeApp!</h1>
        <Link href='/home'>
          <a className={style.LPbutton}>Gotta catch them all!</a>
        </Link>
      </div>
    </div>
  )
}

