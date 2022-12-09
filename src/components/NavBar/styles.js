import { makeStyles } from "@mui/styles";

const drawerWidth = "240px";
export default makeStyles((theme) => ({
  toolbar: {
    // border: "2px solid red",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
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
