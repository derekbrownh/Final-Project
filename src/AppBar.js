import React, { useState, useEffect } from "react";
import CalendarTab from "./Calendar"

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CalendarTodaySharpIcon from "@material-ui/icons/CalendarTodaySharp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, Route } from "react-router-dom";
import { auth } from "./firebase";
import { green } from '@material-ui/core/colors';
import { blueGrey } from '@material-ui/core/colors';

export function AppBarFun(props) {
 
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <AppBar position="static" color = "default">
        <Toolbar style={{ display: "flex" }}>
          <div
            variant="h6"
            color="inherit"
            style={{ flexGrow: 1, paddingLeft: 60 }}
          >
            <Button>
            Ubgab
            </Button>
          </div>
          <CalendarTodaySharpIcon
            style={{ color: green[500] }}
            style={{ marginRight: 30}}
            button
            to={"/app/calendar"}
            component={Link}
            />
          <CalendarTodaySharpIcon color = "secondary" ></CalendarTodaySharpIcon>
          <AccountCircleIcon style={{ marginRight: 20 }} fontSize="medium" button
            to={"/app/account"}
            component={Link}
            />
          
          <Button color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <Route
        path="/app/feed"
        render={routeProps => {
          return <CalendarTab user={props.user} {...routeProps} />;
        }}
      />
    </div>
  );
}
