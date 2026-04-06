import { useMemo, useState } from 'react';
import { Search, Plus, Loader2 } from 'lucide-react';

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
  formatCurrency,
  isLoading
}) {
  const [form, setForm] = useState({ date: '', amount: '', category: 'Groceries', type: 'expense', description: '' });
  const [errors, setErrors] = useState({});

  const totalTransactions = rawTransactions.length;
  const displayedTransactions = transactions.length;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.amount || form.amount <= 0) newErrors.amount = 'Valid amount is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.category) newErrors.category = 'Category is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    onAddTransaction({
      date: form.date,
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
      description: form.description.trim()
    });

    setForm({ date: '', amount: '', category: 'Groceries', type: 'expense', description: '' });
  };

  return (
    <section className="transactions-panel">
      <div className="panel-header">
        <div className="panel-icon">
          <Search size={20} />
        </div>
        <div>
          <p className="eyebrow">Transactions</p>
          <h2>Recent activity</h2>
          <p className="panel-meta">
            Showing {displayedTransactions} of {totalTransactions} transactions
          </p>
        </div>
      </div>

      <div className="transactions-controls">
        <div className="search-input-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="search"
            placeholder="Search category or description"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
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
            {sortDirection === 'asc' ? '↑ Asc' : '↓ Desc'}
          </button>
        </div>
      </div>

      {role === 'Admin' ? (
        <div className="add-panel">
          <div className="panel-header">
            <div className="panel-icon">
              <Plus size={20} />
            </div>
            <h3>Add transaction</h3>
          </div>
          <form onSubmit={handleSubmit} className="transaction-form">
            <div className="form-grid">
              <label>
                Date
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => handleChange('date', event.target.value)}
                  className={errors.date ? 'error' : ''}
                />
                {errors.date && <span className="error-message">{errors.date}</span>}
              </label>
              <label>
                Amount
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.amount}
                  onChange={(event) => handleChange('amount', event.target.value)}
                  placeholder="0.00"
                  className={errors.amount ? 'error' : ''}
                />
                {errors.amount && <span className="error-message">{errors.amount}</span>}
              </label>
              <label>
                Category
                <select
                  value={form.category}
                  onChange={(event) => handleChange('category', event.target.value)}
                  className={errors.category ? 'error' : ''}
                >
                  {categoryOptions.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
                {errors.category && <span className="error-message">{errors.category}</span>}
              </label>
              <label>
                Type
                <select value={form.type} onChange={(event) => handleChange('type', event.target.value)}>
                  <option value="expense">💸 Expense</option>
                  <option value="income">💰 Income</option>
                </select>
              </label>
              <label className="full-width">
                Description
                <input
                  type="text"
                  value={form.description}
                  onChange={(event) => handleChange('description', event.target.value)}
                  placeholder="Enter transaction description"
                  className={errors.description ? 'error' : ''}
                />
                {errors.description && <span className="error-message">{errors.description}</span>}
              </label>
            </div>
            <button type="submit" className="primary-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 size={16} className="loading-spinner" />
                  Adding...
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Add transaction
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="role-note">
          <p>Switch to <strong>Admin</strong> role above to add new transactions.</p>
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
                  <td className="amount-cell">{formatCurrency(transaction.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state-block">
            <Search size={48} stroke="var(--muted)" />
            <p>No transactions match your current filters.</p>
            <small>Try adjusting your search or filter criteria</small>
          </div>
        )}
      </div>
    </section>
  );
}

export default TransactionsPanel;
