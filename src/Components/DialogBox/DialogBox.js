import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";

import "./dialogBox.css";

const DialogBox = (props) => {
  const [Name, setName] = useState("");
  const [Income, setIncome] = useState("");
  const handleClose = () => {
    props.setOpen(false);
  };
  const HandleFunc = () => {
    props.Func(Name, Income);
    // setName('')
    // setIncome('')
    handleClose();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={props.open}>
        <DialogTitle>Add Someone</DialogTitle>
        <DialogContent className="dialogContent">
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            paddingTop="6px"
          >
            <TextField
              label="Enter your name"
              color="secondary"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Enter your income"
              color="secondary"
              value={Income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={HandleFunc}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogBox;
