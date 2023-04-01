import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
      <p className={`${styles.paragraph}, max-w-[470px] mt-5`}>
        If you will chant the name of <span className='text-gradient'>Lord Krishna</span>. 
          Lord Krishna says that he will forgive all your sins . in this way we can go back to our spiritual home
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Cards" className='w-[100%] h-[100%]'/>
    </div>


  </section>
)

export default CardDeal