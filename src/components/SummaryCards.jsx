function SummaryCards({ totals, formatCurrency }) {
  const cards = [
    { title: 'Total Balance', value: totals.balance, accent: 'balance' },
    { title: 'Income', value: totals.income, accent: 'income' },
    { title: 'Expenses', value: totals.expenses, accent: 'expenses' }
  ];

  return (
    <section className="summary-grid">
      {cards.map((card) => (
        <div key={card.title} className={`summary-card summary-card--${card.accent}`}>
          <p className="summary-card__label">{card.title}</p>
          <p className="summary-card__value">{formatCurrency(card.value)}</p>
        </div>
      ))}
    </section>
  );
}

export default SummaryCards;
