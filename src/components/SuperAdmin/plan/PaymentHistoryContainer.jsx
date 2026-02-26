import React, { useState } from "react";
import PaymentHistoryUI from "./PaymentHistory";
import { useInvoicesQuery } from "../../../hooks/superadmin/useInvoicesQuery";
const PaymentHistoryContainer = ({ companyId }) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const { invoices, loading, payInvoice, sendInvoice, downloadInvoice } = useInvoicesQuery(
    companyId,
    year
  );

  return (
    <PaymentHistoryUI
      year={year}
      setYear={setYear}
      rows={invoices}
      loading={loading}
      payInvoice={payInvoice}
      sendInvoice={sendInvoice}
      downloadInvoice={downloadInvoice}
      years={years}
    />
  );
};

export default PaymentHistoryContainer;
