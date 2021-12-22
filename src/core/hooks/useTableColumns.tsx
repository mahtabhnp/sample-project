/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";

const displayKeys = ["flight_number", "launch_site.site_name"];

export default function useTableColumns() {
  const columns: any[] = useMemo(() => {
    return displayKeys.map((key: string) => {
      switch (key) {
        case "flight_number":
          return {
            accessor: key,
            Header: () => "Flight Number",
          };
        case "launch_site.site_name":
          return {
            accessor: key,
            Header: () => "Site Name",
          };

        default:
          return {
            accessor: key,
            id: key,
            isVisible: false,
          };
      }
    });
  }, []);

  return { columns };
}
