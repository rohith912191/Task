import { useMemo, useState } from 'react';

const categoryOptions = [
  'Groceries',
  'Dining',
  'Transport',
  'Utilities',
  'Health',
  'Coffee',
  'Subscription',
  'Salary',
  'Freelance',
  'Bonus'
];

function TransactionsPanel({
  role,
  transactions,
  rawTransactions,
  onAddTransaction,
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  sortKey,
  setSortKey,
  sortDirection,
  setSortDirection,
  formatCurrency
}) {
  const [form, setForm] = useState({ date: '', amount: '', category: 'Groceries', type: 'expense', description: '' });

  const totalTransactions = rawTransactions.length;
  const displayedTransactions = transactions.length;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canSave = useMemo(() => {
    return form.date && form.amount > 0 && form.category && form.description;
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSave) return;

    onAddTransaction({
      date: form.date,
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
      description: form.description
    });

    setForm({ date: '', amount: '', category: 'Groceries', type: 'expense', description: '' });
  };

  return (
    <section className="transactions-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Transactions</p>
          <h2>Recent activity</h2>
          <p className="panel-meta">
            Showing {displayedTransactions} of {totalTransactions} transactions
          </p>
        </div>
      </div>

      <div className="transactions-controls">
        <input
          type="search"
          placeholder="Search category or description"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="filter-row">
          <label>
            Type
            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
          <label>
            Sort by
            <select value={sortKey} onChange={(event) => setSortKey(event.target.value)}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </label>
          <button
            className="sort-toggle"
            type="button"
            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
          >
            {sortDirection === 'asc' ? 'Asc' : 'Desc'}
          </button>
        </div>
      </div>

      {role === 'Admin' && (
        <div className="add-panel">
          <h3>Add transaction</h3>
          <form onSubmit={handleSubmit} className="transaction-form">
            <div className="form-grid">
              <label>
                Date
                <input type="date" value={form.date} onChange={(event) => handleChange('date', event.target.value)} />
              </label>
              <label>
                Amount
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.amount}
                  onChange={(event) => handleChange('amount', event.target.value)}
                />
              </label>
              <label>
                Category
                <select value={form.category} onChange={(event) => handleChange('category', event.target.value)}>
                  {categoryOptions.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Type
                <select value={form.type} onChange={(event) => handleChange('type', event.target.value)}>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </label>
              <label className="full-width">
                Description
                <input
                  type="text"
                  value={form.description}
                  onChange={(event) => handleChange('description', event.target.value)}
                />
              </label>
            </div>
            <button type="submit" className="primary-button" disabled={!canSave}>
              Add transaction
            </button>
          </form>
        </div>
      )}

      <div className="transaction-table-wrapper">
        {transactions.length ? (
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{new Date(transaction.date).toLocaleDateString('en-US')}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td className={`transaction-type transaction-type--${transaction.type}`}>
                    {transaction.type}
                  </td>
                  <td>{formatCurrency(transaction.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state-block">
            <p>No transactions match the current filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TransactionsPanel;
