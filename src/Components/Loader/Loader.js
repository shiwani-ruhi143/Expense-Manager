import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { LoaderContext } from "../../Context/loaderContext";
import LoaderState from "../../Context/LoaderState";
const Loader = () => {
  const { Loading } = useContext(LoaderContext);
  return (
    <LoaderState>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </LoaderState>
  );
};

export default Loader;
