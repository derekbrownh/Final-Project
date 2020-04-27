import React, { useState, useEffect } from "react";
import CalendarTab from "./Calendar"

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import CalendarTodaySharpIcon from "@material-ui/icons/CalendarTodaySharp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, Route } from "react-router-dom";
import { auth } from "./firebase";

export function AppBarFun(props) {
  const [drawer_open, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar style={{ display: "flex" }}>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            style={{ flexGrow: 1, marginleft: 30 }}
          >
            Ubgab
          </Typography>
          <CalendarTodaySharpIcon
            style={{ marginRight: 30}}
            button
            to={"/app/calendar"}
            component={Link}
          />
          <AccountCircleIcon style={{ marginRight: 20 }} fontSize="medium" button
            to={"/app/account"}
            component={Link}
            />
          <Typography color="inherit" style={{ marginRight: 30 }}>
            Hi! {user.email}
          </Typography>
          <Button color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawer_open}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <div>Hello</div>
      </Drawer>
      <Route
        path="/app/feed"
        render={routeProps => {
          return <CalendarTab user={user} {...routeProps} />;
        }}
      />
    </div>
  );
}
