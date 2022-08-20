import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./userExpense.css";
import AddExpense from "../AddExpense/AddExpense";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import AddExpense from "./AddExpense/AddExpense";

const UserExpense = () => {
  let { id } = useParams();
  const navigate = useNavigate(); 
  const [User, setUser] = useState(null);
  const GetUser = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let tempUser = users.findIndex((el) => el.id === id);
    setUser(users[tempUser]);
  };
  const GotoAllExpenses = () => {
    navigate('all-expenses')
  }
  useEffect(() => {
    GetUser();
  }, []);
  return (
    <>
      <Stack justifyContent={"space-around"} alignItems={"center"}>
        <Stack>
          <h2>{User?.name}</h2>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          className={"expenseContainer"}
        >
          <div className="income">
            <h3>Income : {User?.income}</h3>
          </div>
          <div className="expenses">
            <h3>Expenses : {User?.expense}</h3>
          </div>
        </Stack>
        <AddExpense userId={id} getUser={GetUser} />
        <Stack width={"33rem"} justifyContent={"flex-start"}>
          <Button
            className="FormInput"
            variant="outlined"
            onClick={GotoAllExpenses}
          >
            All Expenses
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default UserExpense;
