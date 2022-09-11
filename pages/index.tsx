import  { useEffect, useState } from "react"
import type { NextPage } from 'next'
import Image from "next/image"
import styles from '../styles/Home.module.scss'
import Calendar from "../Components/Calendar"
var date = new Date();
const Home: NextPage = () => {
const [isDrop, setIsDrop] = useState<boolean>(false)
const [currentMonth, setCurrentMonth ] = useState(date.getMonth() + 1)
const [years, setYears ] = useState(date.getFullYear())
const [currentDay, setCurrentDay] = useState(0)




  return (
    <div className={styles.container}>  
      <div className={styles.main}>

      <form action="/action_page.php">
        <div className={styles.datePicker}>
          <div className={styles.datePicker__wrapper} onClick={() =>{
setIsDrop(true)
      }}>
  <label htmlFor="date">from when available</label>

  <div className={styles.inputs}>
  <input type="text" id="date"  placeholder="dd" maxLength={2} name="date" value={  currentDay !== 0 ?  currentDay : ""} onChange={(e) =>{
  currentDay < 30
   setCurrentDay(+(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')))
  }}/>.
  <input type="text" id="date" placeholder="mm" maxLength={2} name="date" value={  currentDay !== 0 ? currentMonth : ""} onChange={(e) =>{
   setCurrentMonth(+e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))

   
  }}/>.
  <input type="text" id="date" placeholder="yyyy"  maxLength={4}  minLength={3} name="date" value={ currentDay !== 0 ? years : ""}   onChange={(e) =>{
   setYears(+e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))
  }}/>
  </div>
  </div>
  <label htmlFor="date">
  <Image
      src="/calendar.png"
      alt="Picture of the author"
      width={20}
      height={20}
    />
    </label>
     {isDrop && <Calendar setCurrentMonth={setCurrentMonth} setYears={setYears}  setCurrentDay={setCurrentDay} currentMonth={currentMonth} years={years}  currentDay={currentDay} setIsDrop={setIsDrop}/>} 
  </div>
</form>

      </div>
    </div>
  )
}

export default Home
