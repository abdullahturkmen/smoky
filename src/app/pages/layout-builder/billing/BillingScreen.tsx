import React from "react";
import { NeverPaid } from "./NeverPaid";
import { RePayment } from "./RePayment";
import { CreditCards } from "./CreditCards";
import { ActivePlan } from "./ActivePlan";
import { BillingAddress } from "./BillingAddress";

type Props = {};

const BillingScreen: React.FC<Props> = ({}) => {
  return (
    <>
    
      <ActivePlan />
    
      <NeverPaid />
     
      <CreditCards />
     
      <BillingAddress />
    
      <RePayment />
     
    </>
  );
};

export { BillingScreen };
