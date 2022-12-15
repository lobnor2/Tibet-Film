import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "100vw",
    // margin: "10px 0",
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column",
    //   flexWrap: "wrap",
    // },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 0.5em 1em rgba(64,64,70,0.7)",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "60%",
      height: "350px",
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
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
    marginRight: "3px",
  },

  castImage: {
    // border: "1px solid red",
    width: "100%",
    maxWidth: "7em",
    height: "8em",
    objectFit: "cover",
    borderRadius: "10px",
    // boxShadow: "2px 2px 4px 2px rgba(54,54,54,0.5)",
    // display: "flex",
    // justifyContent: "space-between",
    // marginRight: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   flexWrap: "wrap",
      height: "160px",
      //   marginBottom: "10px",
    },
  },

  //   buttonsContainer: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     width: "100%",
  //     marginRight: "20px",
  //     [theme.breakpoints.down("sm")]: {
  //       maxWidth: "100vw",
  //       display: "flex",
  //       border: "1px solid red",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       flexDirection: "column",
  //     },
  //   },
  buttonsContainer: {},
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },
}));
