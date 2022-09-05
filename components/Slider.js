import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import styles from "../styles/singlePage.module.css"


function Slider({dataSlider, index}) {
    const [current, setCurrent] = useState(index)
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
                            <div >
                            <Image src={slide.image} alt={slide.title} width={450} height={270} layout={'fixed'} />
                            </div>
                            
                            <div className={styles.infoAbout}>
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                            </div>
                           </div>                            
                           )}
                </div>
            )
        })}

        <div className={styles.buttons}>
        <button onClick={prevSlide}>
        <ArrowLeft className={styles.arrowLeft} size={30}/>  Anterior
        </button>

        <button onClick={nextSlide}>
        Próximo <ArrowRight className={styles.arrowRight} size={30}/>
        </button>
        </div>

    </section>
  )
}

export default Slider
