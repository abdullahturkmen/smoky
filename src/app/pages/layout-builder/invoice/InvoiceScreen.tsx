/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTIcon } from "../../../../_metronic/helpers";
import { InvoicesListWrapper } from "./invoiceTable/InvoicesList";

type Props = {};

const InvoiceScreen: React.FC<Props> = ({}) => {
  return (
    <>
      <InvoicesListWrapper />
    </>
  );
};

export { InvoiceScreen };
