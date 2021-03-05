import moment from "moment";
import "./styles.css";

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
          {value.format("MMMM Y")}
        <div className="day-names">
          {
            ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => 
            <div className="week" key={d}>{d}</div> )
          }
        </div>
        {calendar.map((week) => (
          // To hide a stupid unique key warning
            <div key={week}> 
                {week.map((day) => (
                    <div className="day" key={day.format("DM").toString()}>
                      { day.format("M") === value.format("M") ? day.format("D") : day.format("D MMM")}
                    </div>
                ))}
            </div>
        ))}
      </div>
  )
};

export default Calendar;
