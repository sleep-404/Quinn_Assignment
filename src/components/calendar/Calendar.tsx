import moment from "moment";
import { useState, useRef, useEffect } from "react";
import Month from "./Month";
import {useScrollPosition} from "../../hooks/useScrollPosition"


const Calendar = () => {
  const ref = useRef(null);
  useEffect(()=>{
    ref.current=1;
  },[]);
  const showCalendar=()=>{
      const calendar_grid=document.querySelector('.month-name');
      // alert("hi");
      console.log("calender",calendar_grid)
      if(calendar_grid) calendar_grid.scrollIntoView({behavior:"smooth"})
  }
  showCalendar();
  useScrollPosition(({ prevPos, currPos }) => {
    console.log(prevPos);
    console.log(currPos);
    console.log(document.body.offsetTop);
    console.log("Next",window.innerHeight-currPos.y);
    console.log("Documnet",document.body.offsetHeight);
    if (window.innerHeight-currPos.y >= document.body.offsetHeight){
      console.log("bottom");
      showCalendar();
    }
    else if (currPos.y > 0){
      console.log("top");
      showCalendar();
    }
    else{
      setTimeout(()=>{ref.current=1},0);
    }
  }, [])
  const [month, setMonth] = useState(moment());
  return (
    <Month value={month}/>
  )
};

export default Calendar;
