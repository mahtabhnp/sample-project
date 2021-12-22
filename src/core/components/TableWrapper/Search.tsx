import { Grid, TextField, Typography } from "@material-ui/core";

type SearchProps = {
  onChange: (value: string) => void;
  search: string;
};

export default function Search({ onChange, search }: SearchProps) {
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item>
        <Typography>Find by Site Name</Typography>
      </Grid>
      <Grid item>
        <TextField
          size="small"
          id="outlined-basic"
          variant="outlined"
          value={search}
          onChange={(e: any) => onChange(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}
