import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar/NavBar.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PokeApp - Home</title>
      </Head>

      <NavBar />
      <div>
        <h1>Hola estamos en el Home</h1>
      </div>
    </div>
  )
}
