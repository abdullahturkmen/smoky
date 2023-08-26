import React from "react";
import { NeverPaid } from "./NeverPaid";
import { RePayment } from "./RePayment";
import { CreditCards } from "./CreditCards";
import { ActivePlan } from "./ActivePlan";
import { BillingAddress } from "./BillingAddress";
import { Pricing } from "./Pricing";

type Props = {};

const BillingScreen: React.FC<Props> = ({}) => {
  return (
    <>
    
      <ActivePlan />
    
      <NeverPaid />
     
      <CreditCards />
     
      <BillingAddress />
    
      <RePayment />
     
      <Pricing />
    </>
  );
};

export { BillingScreen };
