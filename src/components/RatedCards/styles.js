import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    // display: "flex",
    // gap: "20px",
    [theme.breakpoints.only("lg")]: {
      border: "1px solid red",
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      //   border: "1px solid red",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
}));
