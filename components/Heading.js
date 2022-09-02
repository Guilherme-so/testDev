import React from 'react'
import {Gear} from "phosphor-react"

import styles from "./heading.module.css"

function Heading() {
  return (
    <div className={styles.heading}>
        <h1>Álbum do conhecimento</h1>
        <Gear className={styles.gear} size={32} />
    </div>
  )
}

export default Heading