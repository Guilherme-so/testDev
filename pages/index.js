import Head from 'next/head'
import Image from 'next/image'
import { MagnifyingGlass } from 'phosphor-react'

import styles from '../styles/Home.module.css'

import { data } from '../data'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.search}>
    
      <form className={styles.form}>
      <input className={styles.searchInput} type={'text'} />

      <button className={styles.searchButton}>
        <MagnifyingGlass className={styles.searchEmoji} size={32} />
      </button>
  
      </form>
  
      </div>

      <div className={styles.main}>

      {
        data.map((item) => {
          return <div key={item.id}>
            <Image src={item.image} width={275.92} height={308} />
          </div>
        })
      }
      </div>
    </div>
  )
}
