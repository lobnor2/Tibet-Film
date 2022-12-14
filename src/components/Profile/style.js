import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  logoutButton: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  seperatebuttonfromtext: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItem: "space-between",
    },
  },
}));
