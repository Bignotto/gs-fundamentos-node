import { uuid } from 'uuidv4';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    if (this.transactions.length === 0)
      return { income: 0, outcome: 0, total: 0 };

    //sum all income
    const incomeTransactions = this.transactions.filter(
      transaction => transaction.type === 'income',
    );
    let incomeTotal = 0;
    if (incomeTransactions.length > 0) {
      const incomeToSum = incomeTransactions.map(({ value }) => value);
      incomeTotal = incomeToSum.reduce((sum, value) => sum + value);
    }

    //sum all outcame
    const outcomeTransactions = this.transactions.filter(
      transaction => transaction.type === 'outcome',
    );
    let outcomeTotal = 0;
    if (outcomeTransactions.length > 0) {
      const outcomeToSum = outcomeTransactions.map(({ value }) => value);
      outcomeTotal = outcomeToSum.reduce((sum, value) => sum + value);
    }

    //subtract outcome from income
    const result = incomeTotal - outcomeTotal;

    const balance = {
      income: incomeTotal,
      outcome: outcomeTotal,
      total: result,
    };
    return balance;
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const newTransaction = {
      id: uuid(),
      title,
      value,
      type,
    };

    this.transactions.push(newTransaction);
    return newTransaction;
  }
}

export default TransactionsRepository;
