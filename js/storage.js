/* Storage helpers keep all application data in the browser's LocalStorage. */
const Storage = {
  transactionKey: 'expenseTrackerTransactions', settingsKey: 'expenseTrackerSettings',
  categories: ['Food','Shopping','Transport','Education','Bills','Entertainment','Health','Salary','Freelance','Other'],
  getTransactions() { try { return JSON.parse(localStorage.getItem(this.transactionKey)) || []; } catch { return []; } },
  saveTransactions(items) { localStorage.setItem(this.transactionKey, JSON.stringify(items)); },
  getSettings() { return { theme: 'light', currency: 'INR', ...JSON.parse(localStorage.getItem(this.settingsKey) || '{}') }; },
  saveSettings(settings) { localStorage.setItem(this.settingsKey, JSON.stringify(settings)); },
  add(item) { const items = this.getTransactions(); items.unshift(item); this.saveTransactions(items); },
  update(id, changes) { const items = this.getTransactions().map(item => item.id === id ? { ...item, ...changes } : item); this.saveTransactions(items); },
  remove(id) { this.saveTransactions(this.getTransactions().filter(item => item.id !== id)); },
  clear() { localStorage.removeItem(this.transactionKey); }
};
