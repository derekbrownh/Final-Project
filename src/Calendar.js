import React, { useState, useEffect } from "react";
import { AppBarFun } from "./AppBar";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarTab(props) {
  return <div>
      <AppBarFun/>
      <Calendar/>
  </div>;
}
