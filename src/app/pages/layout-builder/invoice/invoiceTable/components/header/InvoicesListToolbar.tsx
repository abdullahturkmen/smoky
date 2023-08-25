const InvoicesListToolbar = () => {
  return (
    <div className="d-flex justify-content-end">
      <ul
        className="nav nav-stretch nav-line-tabs border-transparent"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            id="kt_billing_6months_tab"
            className="nav-link fs-5 fw-semibold me-3 active"
            data-bs-toggle="tab"
            role="tab"
            href="#kt_billing_months"
            aria-selected="true"
          >
            Month
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            id="kt_billing_1year_tab"
            className="nav-link fs-5 fw-semibold me-3"
            data-bs-toggle="tab"
            role="tab"
            href="#kt_billing_year"
            aria-selected="false"
          >
            Year
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            id="kt_billing_alltime_tab"
            className="nav-link fs-5 fw-semibold"
            data-bs-toggle="tab"
            role="tab"
            href="#kt_billing_all"
            aria-selected="false"
          >
            All Time
          </a>
        </li>
      </ul>
    </div>
  );
};

export { InvoicesListToolbar };
