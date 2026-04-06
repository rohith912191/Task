import { TrendingUp, TrendingDown, AlertTriangle, Target, BarChart3 } from 'lucide-react';

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

  const getComparisonIcon = () => {
    if (!previous) return <BarChart3 size={20} />;
    if (difference > 0) return <TrendingUp size={20} className="trend-positive" />;
    if (difference < 0) return <TrendingDown size={20} className="trend-negative" />;
    return <BarChart3 size={20} />;
  };

  const getObservationIcon = () => {
    return totals.expenses > totals.income ? <AlertTriangle size={20} className="observation-warning" /> : <Target size={20} className="observation-success" />;
  };

  return (
    <section className="insights-panel">
      <div className="panel-header">
        <div className="panel-icon">
          <BarChart3 size={20} />
        </div>
        <div>
          <h2>Financial Insights</h2>
          <p>Key observations and trends</p>
        </div>
      </div>

      <div className="insights-grid">
        <div className="insight-card insight-card--strong">
          <div className="insight-header">
            <Target size={18} />
            <p className="insight-label">Highest spending category</p>
          </div>
          <h3>{topCategory[0] || 'No expenses yet'}</h3>
          <p>{topCategory[0] ? formatCurrency(topCategory[1]) : 'Add expenses to see insights.'}</p>
        </div>

        <div className="insight-card">
          <div className="insight-header">
            {getComparisonIcon()}
            <p className="insight-label">Monthly comparison</p>
          </div>
          <h3>{current?.month ?? 'No monthly data'}</h3>
          <p>{comparisonLabel}</p>
        </div>

        <div className="insight-card">
          <div className="insight-header">
            {getObservationIcon()}
            <p className="insight-label">Observation</p>
          </div>
          <p>
            {totals.expenses > totals.income
              ? 'Expense level is higher than monthly income. Review variable costs.'
              : 'Cash flow is positive. Keep the savings momentum going.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default InsightsPanel;
