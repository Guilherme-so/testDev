import React, { useState } from 'react'
import {Gear} from "phosphor-react"
import { MagnifyingGlass } from 'phosphor-react'

import styles from "./heading.module.css"
import { useRouter } from 'next/router'

const  Heading = ({data}) => {
  console.log(data)
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  console.log(searchTerm)
  
  const submitHandler = (e) => {
  e.preventDefault()
  const item = data.find((item) => item.title.toLowerCase === searchTerm.toLowerCase)
    router.push(`/${item.id}`)
  }

  return (
    <div className={styles.heading}>

      <div className={styles.title}>
        <h1>Álbum do conhecimento</h1>
        <Gear className={styles.gear} size={32} />
      </div>

      <div className={styles.search}>
        <form onSubmit={submitHandler} className={styles.form}>

          <input className={styles.searchInput} type={'text'} value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder="Pesquise aqui" />
          
          <button className={styles.searchButton}>
            <MagnifyingGlass className={styles.searchEmoji} size={32} />
          </button>
        </form>

      </div>
    </div>
  )
}

export default Heading