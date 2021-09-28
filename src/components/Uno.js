import { makeStyles, Typography, theme } from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Uno = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.btotones}>
      <div className={classes.colocar}>
        &lt;button/&gt;
        <br />
        <button className={classes.boton}>Default</button>
      </div>
      <div className={classes.colocar}>
        &:hover, $:focus
        <br />
        <button className={classes.botonhf}>Default</button>
      </div>
      <div className={classes.colocar}>
        &lt;button variant="outline"/&gt;
        <br />
        <button className={classes.botonoutline}>Default</button>
      </div>
      <div className={classes.colocar}>
        &:hover, $:focus
        <br />
        <button className={classes.botonoutlinehf}>Default</button>
      </div>
      <div className={classes.colocar}>
        &lt;button variant="text"/&gt;
        <br />
        <button className={classes.botontext}>Default</button>
      </div>
      <div className={classes.colocar}>
        &:hover, $:focus
        <br />
        <button className={classes.botontexthf}>Default</button>
      </div>
      <div className={classes.colocartodo}>
        &lt;button variant="disableshadow"/&gt;
        <br />
        <button className={classes.botontdisableshadow}>Default</button>
      </div>
      <div className={classes.colocar}>
        &lt;button disable/&gt;
        <br />
        <button className={classes.botondisable}>Default</button>
      </div>
      <div className={classes.colocar}>
        &lt; button variant="text" disable / &gt;
        <br />
        <button className={classes.botontdisableshf}>Default</button>
      </div>
      <div className={classes.colocar}>
        &lt;button startIcon="local_grocery_store"/&gt;
        <br />
        <button className={classes.botonicono}>
          <ShoppingCartIcon />
          Default
        </button>
      </div>
      <div className={classes.colocar}>
        &lt; button endIcon="local_grocery_store" / &gt;
        <br />
        <button className={classes.botoniconodos}>
          Default
          <ShoppingCartIcon />
        </button>
      </div>
      <div className={classes.colocarSize}>
        &lt; button size="sm"/ &gt;
        <br />
        <button className={classes.botonsm}>Default</button>
      </div>
      <div className={classes.colocarSize}>
        &lt; button size="md"/&gt;
        <br />
        <button className={classes.botonmd}>Default</button>
      </div>
      <div className={classes.colocarSize}>
        &lt; button size="lg"/ &gt;
        <br />
        <button className={classes.botonbg}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        &lt; button color="default"/ &gt;
        <br />
        <button className={classes.botongris}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        &lt; button color="primary"/&gt;
        <br />
        <button className={classes.botonazul}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        &lt; button color="secondary"/ &gt;
        <br />
        <button className={classes.botonoscuro}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        &lt; button color="danger"/ &gt;
        <br />
        <button className={classes.botonrojo}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        &lt; &:hover, $:focus &gt;
        <br />
        <button className={classes.botongrishf}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        <br />
        <button className={classes.botonazulhf}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        <br />
        <button className={classes.botonoscurohf}>Default</button>
      </div>
      <div className={classes.colocarColor}>
        <br />
        <button className={classes.botonrojohf}>Default</button>
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
  colocartodo: {
    float: "left",
    width: "100%",
    marginBottom: "30px",
  },
  colocarSize: {
    float: "left",
    width: "30%",
    marginBottom: "30px",
  },
  colocarColor: {
    float: "left",
    width: "23%",
    marginBottom: "30px",
  },
  boton: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    background: "#E0DFDF",
    borderRadius: "7px",
  },
  botonhf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "7px",
    background: "#C9C9C9",
  },
  botonoutline: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    border: "#2E86D4 solid 1px",
    background: "#ffffff",
    color: "#2E86D4",
    borderRadius: "7px",
  },

  botonoutlinehf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "7px",
    border: "#2E86D4 solid 1px",
    background: "#AED4F6",
    color: "#2E86D4",
  },
  botontext: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    border: "#2E86D4 none 1px",
    background: "#ffffff",
    color: "#2E86D4",
    borderRadius: "7px",
  },
  botontexthf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "7px",
    border: "#2E86D4 none 1px",
    background: "#AED4F6",
    color: "#2E86D4",
  },
  botontdisableshadow: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botondisable: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    border: "#999999 none 1px",
    background: "#cccccc",
    color: "#666666",
    borderRadius: "7px",
  },

  botontdisableshf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    flexDirection: "column",
    border: "#999999 none 1px",
    background: "#ffffff",
    color: "#666666",
    borderRadius: "7px",
  },
  botonicono: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botoniconodos: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botonsm: {
    padding: "10px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botonmd: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botonbg: {
    padding: "20px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botongris: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#C1C1C1",
    color: "#333333",
    borderRadius: "7px",
  },
  botongrishf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#878787",
    color: "#333333",
    borderRadius: "7px",
  },
  botonazul: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#2E86D4",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botonazulhf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#1109FF",
    color: "#ffffff",
    borderRadius: "7px",
  },
  botonoscuro: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#4F4F4F",
    color: "#ffffffff",
    borderRadius: "7px",
  },
  botonoscurohf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#202020",
    color: "#ffffffff",
    borderRadius: "7px",
  },
  botonrojo: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#B91010",
    color: "#fff",
    borderRadius: "7px",
  },
  botonrojohf: {
    padding: "15px",
    border: "black solid 1px",
    display: "flex",
    border: "#2E86D4 none 1px",
    background: "#830909",
    color: "#fff",
    borderRadius: "7px",
  },
  ShoppingCartIcon: {
    margin: "100px",
  },
}));

export default Uno;
