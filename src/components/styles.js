import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    border: "1px solid green",
    // padding: "200px",
    marginLeft: "193px",
    marginTop: "82px",
  },
  content: {
    flexGrow: 1,
    padding: "1.2em",
    border: "1px solid blue",
  },
  toolbar: {
    height: "150px",

    border: "1px solid red",
  },
}));
