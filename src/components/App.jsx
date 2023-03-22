import user from './Profile/user';
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data'
import { Friends } from './Friends/Friends.jsx';
import friends from './Friends/friends'

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <Friends friends={friends} />
    </div>
  );
};
