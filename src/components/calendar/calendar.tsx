import moment from "moment";
import "./styles.css";

var arr = [...Array(100).keys()].map((x) => ++x);

const loadFunc = () => {
  return [...Array(100).keys()].map((x) => ++x);
};

const Calendar = () => {
  const value = moment();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }
  return (
      <div className="calendar">
        {calendar.map((week) => (
          // To hide a stupid unique key warning
            <div key={week}> 
                {week.map((day) => (
                    <div className="day" key={day.format("DM").toString()}>{day.format("D")}</div>
                ))}
            </div>
        ))}
      </div>
  )
};

export default Calendar;
