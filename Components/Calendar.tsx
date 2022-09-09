import React,{useState} from "react";
import Image from "next/image";
import styles from "../styles/Calendar.module.scss";
import { leapYear,month_names_short,Weeks } from "../data/index";


var date = new Date();

const Calendar = () => {
    
const [currentMonth, setCurrentMonth ] = useState<number>(date.getMonth())
const [currentYears, setCurrentYears ] = useState<number>(date.getFullYear())
const [crrentDay, setCurrentDay] = useState<number>(date.getDate())
/* const [dayNumber, setDayNumber] = useState<any>(new Date(currentYears,currentMonth, 1 )) */
const currDate = new Date(currentYears, currentMonth, 1);
console.log(currDate.getDay());
const dayNumber = currDate.getDay()
  const monthSize = leapYear(currentYears)

/*   const array = new Array(monthSize[currentMonth]).fill("day"); */
let array: number[] = new Array(dayNumber).fill(null)
for( let i = 0; i < monthSize[currentMonth]; i++ ){
 array.push(i)
}

console.log(crrentDay)


  return (
    <div className={styles.calendar}>
      <div className={styles.calendat__wrapper}>
        <div className={styles.title}>
          <Image
            src="/Vector.png"
            alt="Picture of the author"
            width={11}
            height={11}
            onClick={() => {
                if(currentMonth === 0){
                    setCurrentMonth(11)
                    setCurrentYears(prev => prev - 1)
                }else
                setCurrentMonth(prev => prev - 1)
            }}
          />
          <p>{month_names_short[currentMonth]}  {currentYears}</p>
          <Image
            src="/Vector2.png"
            alt="Picture of the author"
            width={11}
            height={11}
            onClick={() => {
                if(currentMonth === 11){
                    setCurrentMonth(0)
                    setCurrentYears(prev => prev + 1)
                }else
                setCurrentMonth(prev => prev + 1)
            }}
          />
        </div>
        <div className={styles.weeks}> 
            {Weeks.map((el,i) =>{
                return <span key={i}>{el}</span>
            })}
        </div>
        <div className={styles.days}>{
            
            array.map((el,i) =>{
                
    if(el === null){
   return <p key={i}></p>
    }
    else 
    return <span style = {{border:`${el + 1 === crrentDay ? "1px solid #202945" : ""}`, borderRadius:"50%" }} onClick={() => {
        setCurrentDay(el+1)
/*         setIsDrop(false) */
    }} key={i}>{el + 1}</span>
                   })
            }</div>
      </div>
    </div>
  );
};

export default Calendar;
