import { makeStyles } from "@mui/styles";

const drawerWidth = "100px";
export default makeStyles((theme) => ({
  toolbar: {
    // border: "2px solid red",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "250px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
      alignItems: "center",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      //only show when larger than small device meaning it wont show in mobile devices
      display: "none",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        // width: "100px",
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    linkButton: {
      "&:hover": {
        color: "white",
        textDecoration: "none",
      },
    },
  },
}));
