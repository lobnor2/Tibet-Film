import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    border: "2px solid green",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
    border: "1px solid blue",
  },
  toolbar: {
    height: "70px",
    border: "1px solid red",
  },
}));
