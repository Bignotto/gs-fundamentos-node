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
    //TODO: getBalance() on Transaction Repository
    //sum all outcame
    //sum all income
    //subtract outcome from income
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
