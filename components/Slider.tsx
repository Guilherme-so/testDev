import React, { useState,useContext } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { themeContext } from '../pages/_app'

import styles from "../styles/singlePage.module.css"


function Slider({dataSlider, idx}) {
    const {theme} = useContext(themeContext)
    console.log(idx);
    const [current, setCurrent] = useState(idx)
    const length = dataSlider.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    return (
    <section>        
        
        {dataSlider.map((slide, index) => {
            return(
                <div key={slide.id}>
                    {index === current && (
                            <div className={styles.info}>
                                <div className={styles.imageDiv}>
                                    <Image className={styles.image} src={slide.image} alt={slide.title} width={450} height={270} layout={'fixed'} />
                                </div>
                            
                                <div className={styles.infoAbout}>
                                    <h1 className={theme === "light" ? styles.headingLight : styles.headingDark}>{slide.title}</h1>
                                    <p className={`${theme === "light" ? styles.descLight : styles.descDark} ${styles.description}`}>{slide.description}</p>
                                </div>
                           </div>                            
                           )}
                </div>
            )
        })}

        <div className={styles.buttons}>

        <button className={theme === "light" ? styles.buttonLight : styles.buttonDark} onClick={prevSlide}>
            <ArrowLeft className={styles.arrowLeft} size={30}/>  Anterior
        </button>

        <button className={theme === "light" ? styles.buttonLight : styles.buttonDark} onClick={nextSlide}>
            Próximo <ArrowRight className={styles.arrowRight} size={30}/>
        </button>
        </div>
        
    </section>
  )
}

export default Slider
