import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public async execute({ title, value, type }: Request): Promise<Transaction> {
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transaction;
    //TODO: execute on CreateTransactionServide
  }
}

export default CreateTransactionService;
