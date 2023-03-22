import user from './Profile/user';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';
import { Friends } from './Friends/Friends.jsx';
import friends from './Friends/friends';
import { Transactions } from './Transactions/Transactions.jsx';
import transactions from './Transactions/transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <Friends friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
