/* eslint-disable react-hooks/exhaustive-deps */

import React, { ReactNode, useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

type InjectedProps = { activeIndex: number };

interface GeneralTabsProps {
  children(props: InjectedProps): ReactNode;
  tabLabels: string[];
}

function a11yProps(index: any) {
  return {
    id: `aa-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    direction: "ltr",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanelContent: {
    width: "100%",
    padding: 10,
  },
}));
export default function GeneralTabs({ children, tabLabels }: GeneralTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const classes = useStyles();

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveIndex(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeIndex}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={label}
            label={<span id={`aa-tab-${index}`}>{label}</span>}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      {children({ activeIndex })}
    </div>
  );
}

interface TabPanelProps {
  children: ReactNode;
  panelIndex: number;
  activeIndex: number;
}

function TabPanel({
  children,
  activeIndex,
  panelIndex,
  ...other
}: TabPanelProps) {
  const classes = useStyles();

  return (
    <div
      className={classes.tabPanelContent}
      role="tabpanel"
      hidden={activeIndex !== panelIndex}
      id={`aa-tabpanel-${panelIndex}`}
      aria-labelledby={`tab-${panelIndex}`}
      {...other}
    >
      {activeIndex === panelIndex && children}
    </div>
  );
}

GeneralTabs.TabPanel = TabPanel;
