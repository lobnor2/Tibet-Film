import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      //   border: "1px solid red",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
}));
