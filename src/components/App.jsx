import user from './Profile/user';
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data'


export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
    </div>
  );
};
