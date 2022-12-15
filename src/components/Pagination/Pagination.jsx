import React from "react";
import useStyles from "./styles";
import { Typography, Button } from "@mui/material";

const Pagination = ({ page, setPage, totalPages }) => {
  const classes = useStyles();

  const handlePrev = () => {
    if (page !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (page !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  if (totalPages === 0) return null;
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {page}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="button"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
