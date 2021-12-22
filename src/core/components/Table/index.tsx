import { useTable, TableOptions } from "react-table";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import NoData from "../NoData";
import { makeStyles } from "@material-ui/core";

export interface TableModel<T extends object = {}> extends TableOptions<T> {
  loaded: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #efecec",
  },
  tableHead: {
    fontWeight: 600,
  },
  tableRowOdd: {
    backgroundColor: "#f5f2f2",
  },
  tableRowEven: {
    backgroundColor: "unset",
  },
  box: {
    width: "100%",
  },
}));

export default function Table<T extends object>({
  columns,
  data,
  loaded,
}: TableModel<T>) {
  const classes = useStyles();
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <Grid container>
      <Box className={classes.box}>{!loaded && <LinearProgress />}</Box>
      <MaUTable {...getTableProps()} className={classes.root}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps()}
                  className={classes.tableHead}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.length === 0 && loaded && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <NoData />
              </TableCell>
            </TableRow>
          )}
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                className={
                  index % 2 === 0 ? classes.tableRowEven : classes.tableRowOdd
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </Grid>
  );
}
