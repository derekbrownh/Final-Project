import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Avatar from "@material-ui/core/Avatar";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

import RecurringDetails from "./RecDetails"

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
      >
        <div style={{ height: "50px", display: "flex" }}>
          <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Typography>Members:</Typography>
            <AccountCircleIcon />
            <AccountCircleIcon />
            <AccountCircleIcon />
            <div style={{ flexGrow: 1 }}></div>
            <div>
              <Fab aria-label="edit" Fab size="small"
              button
              onClick={() => {
                setDialogOpen(true);
              }}
              >
                <EditIcon 
                />
              </Fab>
            </div>
          </div>
        </div>
        <div style={{ height: "35px" }}>
          <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <AddCircleOutlineIcon fontSize="large" />
      <Typography>Internet Bill</Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography>Cycle Date: May 1</Typography>
          </div>
        </div>
        <div style={{ height: "30px" }}>
          <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
      <Typography>Accumulative Payment: {props.t.TotalPayments}</Typography>
            <div style={{ flexGrow: 1 }} />
      <Typography>{props.t.id}</Typography>
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
