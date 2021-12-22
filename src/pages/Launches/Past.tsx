/* eslint-disable react-hooks/exhaustive-deps */

import { useMutation } from "react-query";
import { LaunchesService } from "src/core/services/LaunchesService";
import Table from "src/core/components/Table";
import useTableColumns from "src/core/hooks/useTableColumns";
import { Box } from "@material-ui/core";
import TableWrapper from "src/core/components/TableWrapper";
import { ParamsModel } from "src/core/types";

export default function Past() {
  const {
    isSuccess,
    data = [],
    mutate,
  } = useMutation((params: ParamsModel) => {
    return LaunchesService.pastLaunches({ ...params });
  });
  const { columns } = useTableColumns();

  return (
    <Box height={"100%"} display="column">
      <TableWrapper updateTable={(params: ParamsModel) => mutate(params)}>
        <Table data={data} columns={columns} loaded={isSuccess} />
      </TableWrapper>
    </Box>
  );
}
