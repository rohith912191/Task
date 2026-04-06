import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';

function SummaryCards({ totals, formatCurrency }) {
  const cards = [
    {
      title: 'Total Balance',
      value: totals.balance,
      accent: 'balance',
      icon: Wallet,
      description: 'Current account balance'
    },
    {
      title: 'Income',
      value: totals.income,
      accent: 'income',
      icon: TrendingUp,
      description: 'Total earnings this month'
    },
    {
      title: 'Expenses',
      value: totals.expenses,
      accent: 'expenses',
      icon: TrendingDown,
      description: 'Total spending this month'
    }
  ];

  return (
    <section className="summary-grid">
      {cards.map((card) => {
        const IconComponent = card.icon;
        return (
          <div key={card.title} className={`summary-card summary-card--${card.accent}`}>
            <div className="summary-card__header">
              <IconComponent size={24} />
              <div>
                <p className="summary-card__label">{card.title}</p>
                <p className="summary-card__description">{card.description}</p>
              </div>
            </div>
            <p className="summary-card__value">{formatCurrency(card.value)}</p>
          </div>
        );
      })}
    </section>
  );
}

export default SummaryCards;
