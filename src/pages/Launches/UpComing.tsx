/* eslint-disable react-hooks/exhaustive-deps */

import { useMutation } from "react-query";
import { Box } from "@material-ui/core";
import { LaunchesService } from "src/core/services/LaunchesService";
import Table from "src/core/components/Table";
import useTableColumns from "src/core/hooks/useTableColumns";
import { ParamsModel } from "src/core/types";
import TableWrapper from "src/core/components/TableWrapper";

export default function UpComing() {
  const {
    isSuccess,
    data = [],
    mutate,
  } = useMutation((params: ParamsModel) => {
    return LaunchesService.upcomingLaunches({ ...params });
  });
  const { columns } = useTableColumns();

  return (
    <Box height={"100%"}>
      <TableWrapper updateTable={(params: ParamsModel) => mutate(params)}>
        <Table data={data} columns={columns} loaded={isSuccess} />
      </TableWrapper>
    </Box>
  );
}
