import { TransactionList } from './TransactionList';
import { Table } from './Transactions.styled';
import PropTypes from 'prop-types';

export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
            return (
              
            <TransactionList transaction={transaction} key={transaction.id} />
          );
        })}
      </tbody>
    </Table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
