import moment from "moment";
import { useState, useRef, useEffect } from "react";
import Month from "./Month";
import {useScrollPosition} from "../../hooks/useScrollPosition"


const Calendar = () => {
  // const showCalendar=()=>{
  //   const calendar_grid=document.querySelector('.day-names');
  //   console.log("calender",calendar_grid)
  //   if(calendar_grid) calendar_grid.scrollIntoView({behavior:"smooth"})
  // }
  // showCalendar();
  // useScrollPosition(({ prevPos, currPos }) => {
  //   if (window.innerHeight-currPos.y >= document.body.offsetHeight){
  //     console.log("bottom");
  //     nextMonth();
  //     // showCalendar();
  //   }
  //   else if (currPos.y > 5){
  //     console.log("top");
  //     prevMonth();
  //     // showCalendar();
  //   }
  // }, [])
  const [month, setMonth] = useState(moment());
  // const nextMonth = () => {
  //   let nxt_month = month.add(1,"month").clone();
  //   setMonth(nxt_month);
  // }
  // const prevMonth = () => {
  //   let prev_month = month.subtract(1,"month").clone();
  //   setMonth(prev_month);
  // }
  return (
    <Month value={month}/>
  )
};

export default Calendar;
