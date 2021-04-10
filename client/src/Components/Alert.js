import React from "react";
import { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import useAPIError from "../Hooks/useAPIError";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorAlert(props) {
  const { error, removeError } = useAPIError();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      removeError();
      return;
    }
    removeError();
  };
  useEffect(() => {
    if (error === null) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [error]);
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={"error"} onClose={handleClose}>
          {error && `${error.status} - ${error.message}`}
        </Alert>
      </Snackbar>
    </div>
  );
}
