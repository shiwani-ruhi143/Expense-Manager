import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./userList.css";

const UserList = (props) => {
  const navigate = useNavigate();

  const navigateToUserExp = (id) => {
    navigate(`expenses/${id}`);
  };
  return (
    <>
      <Stack direction={"column"}>
        <List
          className="ListContainer"
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemText
              className="ListItem"
              primary={<h3>{props.user.name}</h3>}
              secondary={`Income: ${props.user.income}`}
            />
            <Button
              variant="contained"
              onClick={() => navigateToUserExp(props.user.id)}
            >
              Check Expenses
            </Button>
          </ListItem>
        </List>
        <Divider />
      </Stack>
    </>
  );
};

export default UserList;
