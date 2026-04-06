import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, PieChart as PieChartIcon } from 'lucide-react';

function ChartsPanel({ trendPoints, categoryTotals, formatCurrency }) {
  const categoryData = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
  const topCategories = categoryData.slice(0, 5);
  const totalCategory = categoryData.reduce((sum, [, value]) => sum + value, 0);

  const pieColors = ['#2563eb', '#16a34a', '#dc2626', '#f59e0b', '#8b5cf6'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-value">{formatCurrency(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="charts-panel">
      <div className="chart-card">
        <div className="chart-card__header">
          <div className="chart-icon">
            <TrendingUp size={20} />
          </div>
          <div>
            <h2>Balance Trend</h2>
            <p>Recent cash flow over time</p>
          </div>
        </div>

        <div className="chart-container">
          {trendPoints.length ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendPoints}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="label"
                  stroke="var(--muted)"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="var(--muted)"
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => formatCurrency(value)}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--primary)"
                  strokeWidth={3}
                  dot={{ fill: 'var(--primary)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'var(--primary)', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="empty-state">
              <TrendingUp size={48} stroke="var(--muted)" />
              <p>No trend data available yet.</p>
              <small>Add transactions to see your balance trend</small>
            </div>
          )}
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-card__header">
          <div className="chart-icon">
            <PieChartIcon size={20} />
          </div>
          <div>
            <h2>Spending Breakdown</h2>
            <p>Top expense categories</p>
          </div>
        </div>

        <div className="chart-container">
          {topCategories.length ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topCategories.map(([category, amount], index) => ({
                    name: category,
                    value: amount,
                    percentage: Math.round((amount / totalCategory) * 100)
                  }))}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {topCategories.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [formatCurrency(value), name]}
                  contentStyle={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="empty-state">
              <PieChartIcon size={48} stroke="var(--muted)" />
              <p>No expense data yet.</p>
              <small>Add expense transactions to see the breakdown</small>
            </div>
          )}
        </div>

        {topCategories.length > 0 && (
          <div className="category-legend">
            {topCategories.map(([category, amount], index) => {
              const ratio = totalCategory > 0 ? Math.round((amount / totalCategory) * 100) : 0;
              return (
                <div key={category} className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: pieColors[index % pieColors.length] }} />
                  <div className="legend-text">
                    <span className="legend-category">{category}</span>
                    <span className="legend-value">{formatCurrency(amount)} ({ratio}%)</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default ChartsPanel;
