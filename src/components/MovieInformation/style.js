import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    // margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 0.5em 1em rgba(64,64,70,0.7)",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "350px",
      margin: "0 auto",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
    },
  },
  genresContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    margin: "10px 0 !important",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
    marginRight: "3px",
  },
}));
