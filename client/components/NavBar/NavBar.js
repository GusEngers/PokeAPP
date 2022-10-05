import Link from 'next/link';
import style from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={style.NBcontainer}>
      <div className={style.NBpokemon_container}>
        <Link href='/'>
          <a className={style.NBbutton} style={{textDecoration: 'none'}}>POKEMON</a>
        </Link>
      </div>
      <div className={style.NBhom_cre_container}>
        <Link href='/home'>
          <a className={style.NBbutton} style={{textDecoration: 'none'}}>Home</a>
        </Link>
        <Link href='/create'>
          <a className={style.NBbutton} style={{textDecoration: 'none'}}>Create</a>
        </Link>
      </div>
    </div>
  )
}