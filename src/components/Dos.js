import { makeStyles, Typography, theme } from "@material-ui/core";
import React from "react";

const Dos = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.btotones}>
      <div className={classes.colocar}>
        &lt;button variant="outline"/&gt;
        <br />
        <button className={classes.boton}>Default</button>
      </div>
      <div className={classes.colocar}>
        &:hover, $:focus
        <br />
        <button className={classes.botonhf}>Default</button>
      </div>
    </div>
  );
};

//**para utilizar ui core */
const useStyles = makeStyles((theme) => ({
  botones: {},
  colocar: {
    float: "left",
    width: "40%",
    marginBottom: "30px",
  },
  boton: {
    padding: "7px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    border: "#2E86D4 solid 1px",
    background: "#ffffff",
    color: "#2E86D4",
  },
  botonhf: {
    padding: "7px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      border: "#2E86D4 solid 1px",
      background: "#AED4F6",
      color: "#2E86D4",
    },
    "&:focus": {
      border: "#2E86D4 solid 1px",
      background: "#AED4F6",
      color: "#2E86D4",
    },
  },
}));

export default Dos;
