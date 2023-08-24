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
     <code>
        &lt;!-- Aktif Paketi Bulunan Kullanıcının Göreceği Alan Başlangıç
        --&gt;
      </code>
      <ActivePlan />
      <code>
        &lt;!-- Aktif Paketi Bulunan Kullanıcının Göreceği Alan Bitiş
        --&gt;
      </code>
      <br/>
      <code>
        &lt;!-- Kullanıcı Hiç Ödeme Yapmamış İse Gösterilecek Alan Başlangıç
        --&gt;
      </code>
      <NeverPaid />
      <code>
        &lt;!-- Kullanıcı Hiç Ödeme Yapmamış İse Gösterilecek Alan Bitiş --&gt;
      </code>
<br/>
      <code>
        &lt;!-- Kredi Kartlarının Listeleneceği Alan Başlangıç
        --&gt;
      </code>
      <CreditCards />
      <code>
        &lt;!-- Kredi Kartlarının Listeleneceği Alan Bitiş
        --&gt;
      </code>
      <br/>
      <code>
        &lt;!-- Kullanıcının Girmiş Olduğu Adresler Başlangıç
        --&gt;
      </code>
      <BillingAddress />
      <code>
        &lt;!-- Kullanıcının Girmiş Olduğu Adresler Bitiş
        --&gt;
      </code>
      <br/>
      <code>
        &lt;!-- Ödeme Yapmış Fakat Paketi Bitmiş Olan Kullanıcıya Tekrar Ödeme Yapması Gerektiğini Söylediğimiz Alan Başlangıç
        --&gt;
      </code>
      <RePayment />
      <code>
        &lt;!-- Ödeme Yapmış Fakat Paketi Bitmiş Olan Kullanıcıya Tekrar Ödeme Yapması Gerektiğini Söylediğimiz Alan Bitiş
        --&gt;
      </code>
      <br/>
      <Pricing />
    </>
  );
};

export { BillingScreen };
