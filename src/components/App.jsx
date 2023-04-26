import { Profile } from './profile/Profile';
import user from './profile/user.json';

export const App = () => {
  return (
      <Profile avatar={user.avatar} username={user.username} tag={user.tag} location={user.location}
        followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />

  );
};
