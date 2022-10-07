import Link from 'next/link';

export default function NavBar() {
  return (
    <div>
      <div >
        <Link href='/'>
          <a  style={{textDecoration: 'none'}}>POKEMON</a>
        </Link>
      </div>
      <div>
        <Link href='/home'>
          <a  style={{textDecoration: 'none'}}>Home</a>
        </Link>
        <Link href='/create'>
          <a  style={{textDecoration: 'none'}}>Create</a>
        </Link>
      </div>
    </div>
  )
}