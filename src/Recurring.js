import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Avatar from "@material-ui/core/Avatar";

import RecurringDetails from "./EditTransaction"

export default function Reccuring(props) {
  const [dialog_open, setDialogOpen] = useState(false);

  return (
    <div>
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
        button
        onClick={() => {
          setDialogOpen(true);
        }}

      >
        <div style={{ height: "50px", display: "flex" }}>
          <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Typography>Members:</Typography>
            <Avatar alt = "Derek Brown"/>
            <AccountCircleIcon />
            <AccountCircleIcon />
            <AccountCircleIcon />
            <div style={{ flexGrow: 1 }}></div>
          </div>
        </div>
        <div style={{ height: "35px" }}>
          <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <AddCircleOutlineIcon fontSize="large" />
            <Typography>{props.title}</Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography>Cycle Date: May 1</Typography>
          </div>
        </div>
        <div style={{ height: "30px" }}>
          <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Typography>Accumulative Payment: </Typography> <Typography>{props.TotalPayment}</Typography>
            <div style={{ flexGrow: 1 }} />
      <Typography>Monthly</Typography>
          </div>
        </div>
      </Paper>

      <RecurringDetails
            open = {dialog_open}
            onClose = {()=> {
              setDialogOpen(false);
            }}
          />
    </div>
  );
}
