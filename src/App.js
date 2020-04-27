import React, { useState, useEffect } from "react";
import { AppBarFun } from "./AppBar";
import { CalendarTab } from "./Calendar";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, Route } from "react-router-dom";
import Recurring from "./Recurring";
import RecurringDetails from "./RecDetails"
import Reccuring from "./Recurring";
import VirtualizedList from "./FeedFriends";

export default function App(props) {
  const [homepageToggle, setHomepageToggle] = useState(true);
  const [RecTransactions, setRecTransactions] = useState([
    { id: 0, title: "Internet Bill", Date: "May 1", Schedule: "Monthly", TotalPayment: "100" },
    { id: 1, title: "Phone Bill", Date: "May 1", Schedule: "Monthly", TotalPayment: "1200"}
  ]);
  const [dialog_open, setDialogOpen] = useState(false);

  return (
    <div>
      <AppBarFun></AppBarFun>
      <div style={{ display: "flex" }}>
        <Paper
          style={{
            width: 400,
            height: 800,
            display: "flex",
            flexDirection: "column",

            AlignItems: "center",
          }}
          height="150"
        >
          {RecTransactions.map(t => {
            return(
            <Reccuring 
              t = {RecTransactions}
            />
            );
          })}

        </Paper>
        <Paper style={{ display: "flex", flexGrow: 1 }}>
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <Tabs indicatorColor="secondary" textColor="primary">
              <Tab
                label="Friends"
                textColorSecondary
                onClick={() => setHomepageToggle(true)}
              />
              <Tab label="Personal" onClick={() => setHomepageToggle(false)} />
            </Tabs>
            <Paper style={{ flexGrow: 1 }}>
              {homepageToggle ? <div><VirtualizedList/></div> : 'personal'}
            </Paper>
          </div>
        </Paper>
      </div>

          <RecurringDetails
            open = {dialog_open}
            onClose = {()=> {
              setDialogOpen(false);
            }}
          />

    </div>
  );
}
