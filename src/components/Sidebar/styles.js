import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
    // border: "1px solid green",
  },
  image: {
    width: "100%",
    // border: "1px solid red",
    margin: "0 15px",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" ? "dark" : "invert(1)",
  },
}));
