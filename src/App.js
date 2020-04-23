import React, { useState, useEffect } from "react";
import { AppBarFun } from "./AppBar";
import {CalendarTab} from "./Calendar"

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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { Link, Route } from "react-router-dom";

import Recurring from './Recurring'
export default function App(props) {
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
  
            AlignItems: "center"
          }}
          height="150"
        >
          <Recurring style = {{alignSelf: "center"}}/>
          <Recurring/>
        </Paper>
        <Paper style = {{display: 'flex', flexGrow: 1}}>
          <div style = {{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
        <Tabs
          indicatorColor="secondary"
          textColor="primary"
        >
          <Tab label="Friends" textColorSecondary/>
          <Tab label="Personal" />
        </Tabs>
        <Paper style = {{flexGrow: 1}}>
          <Calendar/>

        </Paper>
        </div>
        
        </Paper>
      </div>
    </div>
  );
}
