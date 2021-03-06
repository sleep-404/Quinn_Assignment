import * as React from "react";
import { hot } from "react-hot-loader";
import Calendar from "./calendar/Calendar";
import moment from "moment";
import { setConstantValue } from "typescript";

const App = () => {
    return (
      <div className="app">
        <Calendar/>
      </div>
    );
}

export default hot(module)(App);
