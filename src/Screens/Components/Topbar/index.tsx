import React from "react";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const WhiteTopbar = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})(AppBar);

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  })
);

const Topbar = () => {
  const classes = useStyles();

  return (
    <>
      <WhiteTopbar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography color="textPrimary" variant="h5" gutterBottom>
            FE Developer Test
          </Typography>
        </Toolbar>
      </WhiteTopbar>
    </>
  );
};

export default Topbar;
