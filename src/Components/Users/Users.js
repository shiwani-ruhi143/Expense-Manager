import React, { useContext, useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import { LoaderContext } from "../../Context/loaderContext";
import "./user.css";
import DialogBox from "../DialogBox/DialogBox";
import Loader from "../Loader/Loader";
import UserList from "./UserList/UserList";

const Users = () => {
  const { setLoading } = useContext(LoaderContext);
  const [dialog, setDialog] = useState(false);
  const [NoUser, setNoUser] = useState(false);
  const AddUser = (userName, income) => {
    let users = JSON.parse(localStorage.getItem("users"));
    let data = {
      id: Math.random().toString(36).substr(2, 8),
      name: userName,
      income: income,
      expense: 0,
    };
    if (!users) {
      localStorage.setItem("users", JSON.stringify([data]));
    } else {
      // let finalData = [...users,data]
      localStorage.setItem("users", JSON.stringify([...users, data]));
    }
    let ans = localStorage.getItem("users");
    console.log(ans);
    if (NoUser) {
      setNoUser(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (localStorage.getItem("users") == null) {
      setNoUser(true);
    }
  }, []);

  return (
    <>
      <div className="container">
        <Loader />
        <DialogBox Func={AddUser} open={dialog} setOpen={setDialog} />
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <h1>Users</h1>
          <Fab color="primary" aria-label="add" onClick={() => setDialog(true)}>
            <AddIcon />
          </Fab>
        </Stack>

        {NoUser ? (
          <h1>No users</h1>
        ) : (
          JSON.parse(localStorage.getItem("users"))?.map((el, i) => {
            return <UserList user={el} key={i} />;
          })
        )}
      </div>
    </>
  );
};

export default Users;
