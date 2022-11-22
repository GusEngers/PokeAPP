import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import ListPokemons from '../components/ListPokemons/ListPokemons.js';
import NavBar from '../components/NavBar/NavBar.js';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const { region } = router.query;
  const [pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if(!pokemons.length) {
      axios('http://localhost:3001/pokemons')
      .then( d => setPokemons(d.data))
      .catch( e => setError(e.message));
    };
    return () => {
      setPokemons([]);
    };
  }, []);

  if(!!error.length) return <h1>{error}</h1>
  if(!pokemons.length) return <h1>Loading...</h1>
  if(region === 'kanto') return (
    <div>
      <Head>
        <title>PokeApp - Home</title>
      </Head>


      <div>
        <NavBar />
        <ListPokemons
          list={pokemons}
        />
      </div>
    </div>
  )
  return <h1>Region {region} no disponible</h1>
}
