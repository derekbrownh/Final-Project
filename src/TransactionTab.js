import React, { useState} from "react";

import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Avatar from "@material-ui/core/Avatar";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RecurringDetails from "./EditTransaction";

export default function Reccuring(props) {
  const [dialog_open, setDialogOpen] = useState(false);

  return (
    <div>
      <ListItem
        style={{
          width: 350,
          height: 110,
          display: "flex",
          flexDirection: "column",
        }}
        alignItems = "flex-start"
        button
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        <ListItemText>
        <div style={{ height: "50px", display: "flex" }}>
          
          <div style={{ display: "flex"}}>
            <Typography>Members:</Typography>
            <div style = {{paddingLeft: 20}}>
              <AvatarGroup max={3}>
                <Avatar
                  src={
                    "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
                <Avatar
                  src={
                    "https://images.pexels.com/photos/3264559/pexels-photo-3264559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
                <Avatar
                  src={
                    "https://images.pexels.com/photos/1526403/pexels-photo-1526403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
                <Avatar
                  src={
                    "https://images.pexels.com/photos/1526403/pexels-photo-1526403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
              </AvatarGroup>
            </div>
            <div style={{ flexGrow: 1 }}></div>
          </div>
        </div>
        <div style={{ height: "35px" }}>
          <div style={{ display: "flex", flexGrow: 1}}>
            <AddCircleOutlineIcon fontSize="large" />
            <Typography>{props.t.title}</Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography>Cycle Date: May 1</Typography>
            <Typography>{props.t.date}</Typography>
            {console.log(props.t)}
          </div>
        </div>
        <div style={{ height: "30px" }}>
          <div style={{ display: "flex"}}>
            <Typography>Accumulative Payment: </Typography>{" "}
            <Typography>{props.TotalPayment}</Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography>Monthly</Typography>
          </div>
          
        </div>
        </ListItemText>
      </ListItem>
      
      <RecurringDetails
        open={dialog_open}
        onClose={() => {
          setDialogOpen(false);
        }}
      />
    </div>
  );
}
