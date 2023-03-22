import user from './Profile/user';
import { Profile } from "./Profile/Profile";


export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
