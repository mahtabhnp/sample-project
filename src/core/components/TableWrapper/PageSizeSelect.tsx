import {
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

type PageSizeSelectProps = {
  onChange: (value: number) => void;
  pageSize: number;
};

export default function PageSizeSelect({
  onChange,
  pageSize,
}: PageSizeSelectProps) {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Typography>Row Size Per Page</Typography>
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          size="small"
          color="primary"
          select
          value={pageSize}
          SelectProps={{
            displayEmpty: true,
            MenuProps: {
              autoFocus: true,
              elevation: 1,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "center",
              },
              getContentAnchorEl: null,
            },
          }}
          onChange={(e: any) => onChange(e.target.value)}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}
