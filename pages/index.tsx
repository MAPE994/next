import Link from 'next/link'
import { ArrowRight } from 'react-feather'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Link className={styles.shipsLink} href={`/ships`}>
      <ArrowRight size={72}/>
      Cool Ships
    </Link>
  )
}
