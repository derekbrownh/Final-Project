import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { db, storage, snapshotToArray} from "./firebase";
import Avatar from "@material-ui/core/Avatar";
// import uuid from "node-uuid"

export default function AddAvatar(props) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [avatar, setAvatar] = useState("");
  const handleSavePhoto = () => {
    setSaving(true);
    storage
      .ref("Avatar/")
      .put(file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          db.collection("users").doc("LhqdReq2JleZmsS36kTshgwvidl2").collection('avatars')
            // .doc(props.user.uid).collection('avatar') //couldn't figure out how to pass props user through
            .add({ title: title, image: downloadURL })
            .then(() => {
              setTitle("");
              setFile(null);
              setSaving(false);
              props.onClose();
            });
        });
      });
  };

  const handleUpdatePhoto = () => {
    setSaving(true);
    storage
      .ref("photos/044a9e9c-eca4-4139-9f0a-26cadae6f9a9")
      .put(file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          db.collection("users")
            .doc(props.user.uid)
            .collection("albums")
            .doc(props.album_id)
            .collection("photos")
            .add({ title: title, image: downloadURL })
            .then(() => {
              setTitle("");
              setFile(null);
              setSaving(false);
              props.onClose();
            });
        });
      });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    const unsubscribe = db.collection("users").onSnapshot((snapshot) => {
      const updated_avatar = snapshotToArray(snapshot);
      setAvatar(updated_avatar);
    });
    return unsubscribe;
  }, [props]);

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      maxWidth="sm"
      fullWidth={true}
    >
      <Avatar src = {"https://firebasestorage.googleapis.com/v0/b/final-project-v2-d6704.appspot.com/o/Avatar?alt=media&token=0845b90a-fa38-485b-9873-aadf6bc2865e"}/>
      <DialogTitle>Add a Photo</DialogTitle>
      <DialogContent>
        <TextField
          label="Photo Title"
          fullWidth={true}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
          <Button
            variant="contained"
            component="label"
            style={{ marginRight: 25 }}
          >
            Choose a File
            <input
              type="file"
              onChange={handleFile}
              style={{ display: "none" }}
            />
          </Button>
          {file && <Typography>{file.name}</Typography>}
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClose}>
          Cancel
        </Button>
        <div style={{ position: "relative" }}>
          <Button color="primary" variant="contained" onClick={handleSavePhoto}>
            Save
          </Button>
          {saving && (
            <CircularProgress
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: -12,
                marginLeft: -12,
              }}
              color="secondary"
              size={24}
            />
          )}
        </div>
      </DialogActions>
    </Dialog>
  );
}
