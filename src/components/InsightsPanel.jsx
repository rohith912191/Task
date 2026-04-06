function InsightsPanel({ totals, topCategory, monthlyComparison, formatCurrency }) {
  const latestMonths = monthlyComparison.slice(-2);
  const [previous, current] = latestMonths.length === 2 ? latestMonths : [undefined, latestMonths[0]];
  const difference = previous ? current.value - previous.value : null;
  const comparisonLabel = previous
    ? difference > 0
      ? 'Improved performance versus prior month'
      : difference < 0
      ? 'Expenses increased from prior month'
      : 'Monthly cash flow remains stable'
    : 'Add another month of activity to compare performance.';

  return (
    <section className="insights-panel">
      <div className="insight-card insight-card--strong">
        <p className="insight-label">Highest spending category</p>
        <h3>{topCategory[0] || 'No expenses yet'}</h3>
        <p>{topCategory[0] ? formatCurrency(topCategory[1]) : 'Add expenses to see insights.'}</p>
      </div>

      <div className="insight-card">
        <p className="insight-label">Monthly comparison</p>
        <h3>{current?.month ?? 'No monthly data'}</h3>
        <p>{comparisonLabel}</p>
      </div>

      <div className="insight-card">
        <p className="insight-label">Observation</p>
        <p>
          {totals.expenses > totals.income
            ? 'Expense level is higher than monthly income. Review variable costs.'
            : 'Cash flow is positive. Keep the savings momentum going.'}
        </p>
      </div>
    </section>
  );
}

export default InsightsPanel;
