import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    // padding: "10px",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "190px",
      // border: "1px solid red",
    },
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
    [theme.breakpoints.down("sm")]: {
      width: "190px",
      overflow: "hidden",
    },
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
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "15px",
    height: "350px",
    marginBottom: "5px",
    marginTop: "20px",

    "&:hover": {
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      height: "270px",
      width: "100%",
      marginBottom: "7px",
      "&:hover": {
        transform: "scale(1)",
      },
    },
  },
}));
