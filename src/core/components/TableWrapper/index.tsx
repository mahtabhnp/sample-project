import { useEffect, useState, PropsWithChildren, Fragment } from "react";
import { Grid } from "@material-ui/core";
import useDebounce from "src/core/hooks/useDebounce";
import { ParamsModel } from "src/core/types";
import PageNumberButtons from "./PageNumberButtons";
import PageSizeSelect from "./PageSizeSelect";
import Search from "./Search";

type TableWrapperProps = {
  updateTable: (params: ParamsModel) => void;
};

export default function TableWrapper({
  children,
  updateTable,
}: PropsWithChildren<TableWrapperProps>) {
  const [pageSize, setPageSize] = useState(10);
  const [siteName, setSiteName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const debouncedPageNumber: number = useDebounce(pageNumber, 500);
  const debouncedSiteName: string = useDebounce(siteName, 500);

  const handlePageNumberChange = (value: number) => {
    setPageNumber(value);
  };
  const handlePageSizeChange = (value: number) => {
    setPageSize(value);
    setPageNumber(1);
  };
  const handleSiteNameChange = (value: string) => {
    setSiteName(value);
    setPageNumber(1);
  };

  useEffect(() => {
    updateTable(
      debouncedSiteName
        ? {
            limit: pageSize,
            offset: (debouncedPageNumber - 1) * pageSize,
            site_name: debouncedSiteName,
          }
        : { limit: pageSize, offset: (debouncedPageNumber - 1) * pageSize }
    );
  }, [debouncedPageNumber, pageSize, debouncedSiteName]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Search onChange={handleSiteNameChange} search={siteName} />
      </Grid>
      <Grid item xs={12}>
        <Grid container>{children}</Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row-reverse"
        >
          <Grid item>
            <PageNumberButtons
              onChange={handlePageNumberChange}
              pageNumber={pageNumber}
            />
          </Grid>
          <Grid item>
            <PageSizeSelect
              onChange={handlePageSizeChange}
              pageSize={pageSize}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
