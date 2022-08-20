import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Users/Users";
import UserExpense from "./Components/UserExpense/UserExpense";
import React from 'react';
import AllExpenses from "./Components/All Expenses/AllExpenses";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Users />} />
        <Route path="/expenses/:id" element={<UserExpense />} />
        <Route path="/expenses/:id/all-expenses" element={<AllExpenses/>} />
      </Routes>
    </div>
  );
}

export default App;

// Users -> Add user, Delete a user , Modify a user

// List of users -> Check Expenses -> Expense && Income (Section) ,Add expense(Form)(Name,ExpenseAmount,Date) -> Track All Expenses -> List of expenses
