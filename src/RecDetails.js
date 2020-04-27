import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";
import { db } from "./firebase";

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function RecurringDetails(props) {
  const [name, setName] = useState("");
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
            setName(e.target.value);
          }}
          value={name}
        />
        <TextField
          label="Transaction Description"
          fullWidth={true}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
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