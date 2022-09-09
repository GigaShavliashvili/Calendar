import  { useState } from "react"
import type { NextPage } from 'next'
import Image from "next/image"
import styles from '../styles/Home.module.scss'
import Calendar from "../Components/Calendar"

const Home: NextPage = () => {
const [isDrop, setIsDrop] = useState<boolean>(false)


  return (
    <div className={styles.container}>
      <div className={styles.main}>

      <form action="/action_page.php">
        <div className={styles.datePicker}>
          <div className={styles.datePicker__wrapper}>
  <label htmlFor="date">from when available</label>
  <input type="text" defaultValue="dd.mm.yyyy" id="date" name="date"/>
  </div>
  <Image
      src="/calendar.png"
      alt="Picture of the author"
      width={20}
      height={20}
      onClick={() =>{
setIsDrop(!isDrop)
      }}
    />
     {isDrop && <Calendar/>} 
  </div>
</form>

      </div>
    </div>
  )
}

export default Home
