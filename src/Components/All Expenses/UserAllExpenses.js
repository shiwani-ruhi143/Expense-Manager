import React from "react";
import ListItem from "@mui/material/ListItem";
import "./userAllExpense.css"
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Stack } from "@mui/material";

const UserAllExpenses = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Stack>
        <ListItemButton className="list-button" onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={`${props.expenseList.date}`} />
          {open ? <ExpandMore /> : <ExpandLess/>}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItem>
                <ListItemText
                  className="ListItem"
                  primary={<h3>{props.expenseList.name}</h3>}
                  secondary={`Amount spent : ${props.expenseList.amount}`}
                />
                <h4>{props.expenseList.reason}</h4>
              </ListItem>
            </ListItemButton>
          </List>
        </Collapse>
      </Stack>
    </>
  );
};

export default UserAllExpenses;
