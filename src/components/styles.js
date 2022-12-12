import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

export default makeStyles((theme) => ({
  // const isMobile = useMediaQuery({"max-width:600px"});
  // const isMobile = useMediaQuery("(max-Width:600px)");

  root: {
    display: "flex",
    height: "auto",
    // border: "1px solid green",
    marginLeft: "220px",
    marginRight: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 2,
      marginRight: 2,
      // flex: 1,
    },
    marginTop: "82px",
  },
  content: {
    flexGrow: 1,
    padding: "1.2em",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginTop: 5,
    },
    // border: "1px solid blue",
  },
  toolbar: {
    height: "auto",

    // border: "1px solid red",
  },
}));
