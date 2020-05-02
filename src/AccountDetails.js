import React, { useState} from "react";
import AddAvatar from "./AddPhoto";
import Typography from "@material-ui/core/Typography";

export function AccountPage(props) {
 const [photo_open, setPhotoOpen] = useState(false)
  return (
    <div>
      <Typography>Add Bank Account</Typography>
      <Typography
      button
      onClick={() => {
        setPhotoOpen(true);
      }}
      user={props.user}
      >
        
        Change User Picture</Typography>
      <Typography>Find Friends</Typography>
      <Typography color="inherit" style={{ marginRight: 30 }}>
            {/* Hi! {props.user.email} */}
          </Typography>
      <AddAvatar
              open={photo_open}
              onClose={() => {
                setPhotoOpen(false);
              }}
              user={props.user}
            />
    </div>
  );
}