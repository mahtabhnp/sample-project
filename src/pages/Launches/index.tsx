/* eslint-disable react-hooks/exhaustive-deps */

import { Fragment } from "react";
import { Box } from "@material-ui/core";
import GeneralTabs from "src/core/components/GeneralTabs";
import Past from "./Past";
import UpComing from "./UpComing";

export default function Launches() {
  const tabLabels = ["UpComing", "Past"];

  return (
    <Box borderRadius={10} p={2} bgcolor="#fff" border="1px solid lightGray">
      <GeneralTabs tabLabels={tabLabels}>
        {({ activeIndex }) => (
          <Fragment>
            <GeneralTabs.TabPanel panelIndex={0} activeIndex={activeIndex}>
              <UpComing />
            </GeneralTabs.TabPanel>
            <GeneralTabs.TabPanel panelIndex={1} activeIndex={activeIndex}>
              <Past />
            </GeneralTabs.TabPanel>
          </Fragment>
        )}
      </GeneralTabs>
    </Box>
  );
}
