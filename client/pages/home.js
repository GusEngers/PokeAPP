import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import Loading from '../components/Loading/Loading.js';
import ListPokemons from '../components/ListPokemons/ListPokemons.js';
import NavBar from '../components/NavBar/NavBar.js';
import { useRouter } from 'next/router';
import Paginated from '../components/Paginated/Paginated.js';

export default function Home() {
  const router = useRouter();
  const { region } = router.query;
  const [pokemons, setPokemons] = React.useState([]);
  const [error, setError] = React.useState('');
  const [page, setPage] = React.useState(1);
  const listPage = page * 12;
  const firstPokemon = listPage - 12;
  const current = pokemons.slice(firstPokemon, listPage);
  const [order, setOrder] = React.useState('');
  
  const paginated = (numPage) => {
    setPage(numPage);
  };

  React.useEffect(() => {
    if(!pokemons.length) {
      axios('http://localhost:3001/pokemons')
      .then( d => setPokemons(d.data))
      .catch( e => setError(e.message));
    };
    return () => {
      setPokemons([]);
      setError('');
    };
  }, []);

  if(!!error.length) return <h1>{error}</h1>
  if(!pokemons.length) return <Loading />
  if(region === 'kanto') return (
    <div>
      <Head>
        <title>PokeApp - Home</title>
      </Head>


      <div>
        <NavBar />
        <ListPokemons
          list={current}
        />
        <Paginated 
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          paginated={paginated}
        />
      </div>
    </div>
  )
  return <h1>Region {region} no disponible</h1>
}
