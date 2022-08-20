import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./addExpense.css";
const AddExpense = ({ userId, getUser }) => {
  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState(0);
  const [Date, setDate] = useState("");
  const [Reason, setReason] = useState("");

  const AddExpenseToLocalStorage = () => {
    let data = {
      userId: userId,
      name: Name,
      amount: Amount,
      date: Date,
      reason: Reason,
    };
    let allUsers = JSON.parse(localStorage.getItem("users"));
    let finalUserindex = allUsers.findIndex((el) => el.id === userId);
    allUsers[finalUserindex]["expense"] += parseInt(Amount);
    localStorage.setItem("users", JSON.stringify(allUsers));
    let expenses = JSON.parse(localStorage.getItem("expenses"));
    if (!expenses) {
      localStorage.setItem("expenses", JSON.stringify([data]));
    } else {
      localStorage.setItem("expenses", JSON.stringify([...expenses, data]));
    }
    getUser();
  };
  return (
    <Paper elevation={3} className="AddExpenseContainer">
      <h3>Add Expense</h3>
      <Stack className="FormContainer">
        <TextField
          className="FormInput"
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          className="FormInput"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="FormInput"
          id="outlined-basic"
          label="Date"
          variant="outlined"
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          className="FormInput"
          id="outlined-basic"
          label="Reason"
          variant="outlined"
          onChange={(e) => setReason(e.target.value)}
        />
        <Button
          className="FormInput"
          variant="contained"
          onClick={AddExpenseToLocalStorage}
        >
          Add
        </Button>
      </Stack>
    </Paper>
  );
};

export default AddExpense;
