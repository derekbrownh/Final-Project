import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AddTrans from "./AddTransaction";

export default function AddTransactionTab(props) {
  const [transaction_open, setTransactionOpen] = useState(false);

  return (
    <div>
      <ListItem
        style={{
          width: 350,
          height: 50,
          alignSelf: "center",
          display: "flex",
          flexDirection: "column"
        }}
        alignItems = "flex-start"
        button
        onClick={() => {
          setTransactionOpen(true);
        }}
      >
        <ListItemText>Add Transaction</ListItemText>
      </ListItem>
      <Divider />
      <AddTrans
        open={transaction_open}
        onClose={() => {
          setTransactionOpen(false);
        }}
        user={props.user}
      />
    </div>
  );
}
