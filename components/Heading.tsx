import React, { useContext, useState } from 'react'
import {Gear} from "phosphor-react"
import { MagnifyingGlass } from 'phosphor-react'
import { useRouter } from 'next/router'
import { themeContext } from '../pages/_app'
import ReactSwitch from 'react-switch'

import styles from "./heading.module.css"
import Link from 'next/link'

const  Heading = () => {
  const {theme, toogleTheme} = useContext(themeContext)
  const router = useRouter()


  const [searchTerm, setSearchTerm] = useState("")
  console.log(searchTerm)
  
  
  const submitHandler = async (e: any) => {
    e.preventDefault()

    const response = await fetch("/api/search",{
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({payload: searchTerm}) 
    })

    const data = await response.json()
    console.log(data.payload)
    router.push(`/${data.payload._id}`)
  }

  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <Link href="/">
        <h1 className={`${theme === "dark" ? styles.headingDark : styles.headingLight} ${styles.heading}`}>
          Álbum do conhecimento
        </h1>
        </Link>
        <form onSubmit={submitHandler} className={styles.form}>

        <input className={styles.searchInput} type={'text'} value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder="Pesquise aqui" />

        <button className={styles.searchButton}>
          <MagnifyingGlass className={styles.searchEmoji} size={32} />
        </button>
        </form>
      </div>

      <div className={styles.icons}>
          <Gear className={styles.gear} size={32} color={theme === "dark" ? "#ffffff" : "#000000"} />
          <ReactSwitch className={styles.switch} onChange={toogleTheme} checked={theme === "dark"} />
      </div>

    </div>
  )
}

export default Heading
