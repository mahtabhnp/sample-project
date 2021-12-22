import React, { Fragment, PropsWithChildren } from "react";
import Header from "../Header";

type RouterWrapperProps = {};

export default function RouterWrapper({ children }: PropsWithChildren<RouterWrapperProps>) {
  return (
    <Fragment>
      <Header />
      <section style={{ margin: "50px 150px" }}>{children}</section>
    </Fragment>
  );
}
