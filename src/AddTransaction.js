import React, { useState, useEffect } from "react";
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";
import { db } from "./firebase";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

export default function AddTrans(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [merchantID, setMerchantID] = useState("");
  const [selectedDate, setSelectedDate] = useState("2014-08-18T21:11:54");

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSaveTransaction = () => {
    db.collection("users")
      .doc(props.user.uid)
      .collection("transactions")
      .add({
        title: title,
        description: description,
        date: date,
        merchantID: merchantID,
      })
      .then(setTitle(""), setDescription(""), setMerchantID(""), setDate(""));
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      maxWidth="sm"
      fullWidth={true}
    >
      <TextField
        label="Transaction Title"
        fullWidth={true}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <DialogContent>
        <Typography>Members:</Typography>
        <AccountCircleIcon />
        <AccountCircleIcon />
        <AccountCircleIcon />
        <TextField
          label="Transaction Description"
          fullWidth={true}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <TextField
          label="Add Date"
          fullWidth={true}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

        </MuiPickersUtilsProvider> */}

        <TextField
          label="Select Merchant ID"
          fullWidth={true}
          onChange={(e) => {
            setMerchantID(e.target.value);
          }}
          value={merchantID}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSaveTransaction}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
