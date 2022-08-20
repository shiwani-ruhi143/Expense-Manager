import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserAllExpenses from "./UserAllExpenses";
const AllExpenses = () => {
  let { id } = useParams();
  const [allExpenses, setAllExpenses] = useState([]);
  const getAllExpenses = () => {
   let allexpenses = JSON.parse(localStorage.getItem("expenses")).filter (
      (el) => el.userId === id
    );
    setAllExpenses(allexpenses);
    console.log(allExpenses);

  };
  useEffect(() => {
    getAllExpenses();
  },[]);
  return (
    <>
    <h1>All Expenses</h1>
      {allExpenses.map((el, i) => {
        return <UserAllExpenses expenseList={el} key={i} />;
      })}
    </>
  );
};

export default AllExpenses;
