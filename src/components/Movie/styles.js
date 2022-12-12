import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
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
    height: "300px",
    marginBottom: "10px",
    // boxShadow: "3px 9px 35px -6px rgba(0,0,0,0.82)",

    [theme.breakpoints.down("sm")]: {
      height: "500px",
      width: "90%",
      marginBottom: "20px",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
