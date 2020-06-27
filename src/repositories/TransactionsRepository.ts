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

  public create(): Transaction {
    //TODO: create() on Transaction Repository
  }
}

export default TransactionsRepository;
