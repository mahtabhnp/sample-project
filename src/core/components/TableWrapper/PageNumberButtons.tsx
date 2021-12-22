import { Button, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

type PageNumberButtonsProps = {
  onChange: (value: number) => void;
  pageNumber: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

export default function PageNumberButtons({
  onChange,
  pageNumber,
}: PageNumberButtonsProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      direction="row-reverse"
    >
      <Grid item>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          startIcon={<ArrowForwardIosIcon />}
          onClick={() => onChange(pageNumber + 1)}
        >
          Next
        </Button>
      </Grid>
      <Grid item>
        <Typography>{pageNumber}</Typography>
      </Grid>
      <Grid item>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          endIcon={<ArrowBackIosIcon />}
          disabled={pageNumber === 1}
          onClick={() => onChange(pageNumber > 1 ? pageNumber - 1 : 1)}
        >
          Previous
        </Button>
      </Grid>
    </Grid>
  );
}
