function ChartsPanel({ trendPoints, categoryTotals, formatCurrency }) {
  const trendMax = Math.max(...trendPoints.map((point) => Math.abs(point.value)), 1);
  const categoryData = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
  const topCategories = categoryData.slice(0, 5);
  const totalCategory = categoryData.reduce((sum, [, value]) => sum + value, 0);

  return (
    <section className="charts-panel">
      <div className="chart-card">
        <div className="chart-card__header">
          <h2>Balance trend</h2>
          <p>Recent cash flow</p>
        </div>

        <div className="trend-chart">
          {trendPoints.length ? (
            trendPoints.map((point) => {
              const percent = Math.round((Math.abs(point.value) / trendMax) * 100);
              return (
                <div key={point.label} className="trend-chart__bar">
                  <div
                    className="trend-chart__fill"
                    style={{ height: `${Math.max(percent, 10)}%` }}
                    title={`${point.label}: ${formatCurrency(point.value)}`}
                  />
                  <small>{point.label}</small>
                </div>
              );
            })
          ) : (
            <div className="empty-state">No trend data available yet.</div>
          )}
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-card__header">
          <h2>Spending breakdown</h2>
          <p>Top categories</p>
        </div>

        <div className="category-list">
          {topCategories.length ? (
            topCategories.map(([category, amount]) => {
              const ratio = totalCategory > 0 ? Math.round((amount / totalCategory) * 100) : 0;
              return (
                <div key={category} className="category-item">
                  <div>
                    <span className="category-dot" />
                    <strong>{category}</strong>
                  </div>
                  <div className="category-value">
                    <span>{formatCurrency(amount)}</span>
                    <span>{ratio}%</span>
                  </div>
                  <div className="category-bar">
                    <div className="category-bar__fill" style={{ width: `${ratio}%` }} />
                  </div>
                </div>
              );
            })
          ) : (
            <p className="empty-state">No expense categories yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChartsPanel;
