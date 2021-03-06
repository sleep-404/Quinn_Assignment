import moment from "moment";
import { useState } from "react";
import Month from "./Month";
import {useScrollPosition} from "../../hooks/useScrollPosition"

const Calendar = () => {
  useScrollPosition(({ prevPos, currPos }) => {
    console.log(prevPos);
    console.log(currPos);
    console.log("Next",window.innerHeight-currPos.y);
    console.log("Documnet",document.body.offsetHeight);

  }, [])
  const [month, setMonth] = useState(moment());
  return (
    <Month value={month}/>
  )
};

export default Calendar;
