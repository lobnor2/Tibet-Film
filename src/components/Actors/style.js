import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  //   imagegrid: {
  //     [theme.breakpoints.down("sm")]: {
  //       display: "flex",
  //       justifyContent: "center",
  //       marginLeft: "50px",
  //     },
  //   },
  image: {
    maxWidth: "90%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0.5em 0.5em 1em rgba(0,0,0,0.4)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: "400px",
      marginLeft: "70px",
    },
  },
}));
