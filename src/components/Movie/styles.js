import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
    // border: "1px solid red",
    width: "300px",
    // margin: "5px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "250px",

    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
    // fontSize: "40px",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "50px",
    // },
    // textDecoration: "none",
    // listStyle: "none",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    marginBottom: "30px",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
      // textDecoration: "none",
    },
  },
  image: {
    borderRadius: "15px",
    height: "350px",
    marginBottom: "5px",

    [theme.breakpoints.down("sm")]: {
      height: "400px",
      width: "90%",
      marginBottom: "5px",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
