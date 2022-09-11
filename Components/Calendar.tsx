import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Calendar.module.scss";
import { leapYear, month_names_short, Weeks } from "../data/index";

var date = new Date();
interface dataPickers {
  setCurrentMonth: (value: number) => void;
  setYears: (value: number) => void;
  setCurrentDay: (value: number) => void;
  setIsDrop: (value: boolean) => void;
  currentDay: number;
  years: number;
  currentMonth: number;
}

const Calendar = ({
  setCurrentMonth,
  setYears,
  setCurrentDay,
  setIsDrop,
  currentDay,
  years,
  currentMonth,
}: dataPickers) => {
  /* const [dayNumber, setDayNumber] = useState<any>(new Date(currentYears,currentMonth, 1 )) */
  const currDate = new Date(years, currentMonth , 1);
  console.log(currDate.getDay());
  const dayNumber = currDate.getDay();
  const monthSize = leapYear(years);

  /*   const array = new Array(monthSize[currentMonth]).fill("day"); */
  let array: number[] = new Array(dayNumber).fill(null);
  for (let i = 0; i < monthSize[currentMonth - 1]; i++) {
    array.push(i);
  }



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
              if (currentMonth === 1) {
                setCurrentMonth(11);
                setYears(years - 1);
              } else setCurrentMonth(currentMonth - 1);
            }}
          />
          <p>
            {month_names_short[currentMonth - 1]}{" "}
            {years}
          </p>
          <Image
            src="/Vector2.png"
            alt="Picture of the author"
            width={11}
            height={11}
            onClick={() => {
              if (currentMonth === 12) {
                setCurrentMonth(1);
                setYears(years + 1);
              } else setCurrentMonth(currentMonth + 1);
            }}
          />
        </div>
        <div className={styles.weeks}>
          {Weeks.map((el, i) => {
            return <span key={i}>{el}</span>;
          })}
        </div>
        <div className={styles.days}>
          {array.map((el, i) => {
            if (el === null) {
              return <p key={i}></p>;
            } else
              return (
                <span
                  onMouseEnter={(e) => {
                    setCurrentDay(+e.currentTarget.innerHTML);
                  }}
                  onClick={() => {
                    setCurrentDay(el + 1);
                    setIsDrop(false);
                  }}
                  key={i}
                >
                  {el + 1}
                </span>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
