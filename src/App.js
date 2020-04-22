import React, { useState, useEffect } from "react";
import { AppBarFun } from "./AppBar";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { Link, Route } from "react-router-dom";

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
            marginRight: 10,
            marginTop: 10,
          }}
          height="150"
        >
          <Paper
            style={{
              width: 350,
              height: 100,
              alignSelf: "center",
              marginRight: 10,
              marginTop: 10,
              marginLeft: 10,
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
            }}
            marginTop="15"
            marginLeft="15"
          >
            <div style={{ backgroundColor: "green", height: "50px", display: 'flex' }}>
              <div style = {{flexGrow: 1}}>Friends</div>
              <div>
                <Fab color="primary" aria-label="edit" Fab size="small">
                  <EditIcon />
                </Fab>
              </div>
            </div>
            <div style={{ backgroundColor: "red", height: "35px" }}>Charge</div>
            <div style={{ backgroundColor: "blue", height: "30px" }}>
              Details
            </div>
          </Paper>
          <Paper
            style={{
              width: 350,
              height: 100,
              alignSelf: "center",
              marginRight: 10,
              marginTop: 10,
              marginLeft: 10,
              marginBottom: 10,
            }}
            marginTop="15"
            marginLeft="15"
          >
            hello
          </Paper>
          <List>
            <ListItem button to={"/app/feed/"} component={Link}>
              <ListItemText primary="Public Feed"></ListItemText>
            </ListItem>
          </List>
        </Paper>
      </div>
    </div>
  );
}
