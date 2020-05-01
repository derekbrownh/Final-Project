import React, { useState, useEffect } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

import 'date-fns';

export default function RecurringDetails(props) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [merchantID, setMerchantID] = useState("");
  const [selectedDate, setSelectedDate] = useState('2014-08-18T21:11:54');

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle>Recurring Transaction</DialogTitle>
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
        <Button color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
