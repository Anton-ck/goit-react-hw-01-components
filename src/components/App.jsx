import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../components/statistics/data.json';
import { FriendsList } from './friends/FriendList';
import friends from './friends/friend.json';


export const App = () => {
  return (
    <>
      <Profile
        // avatar={user.avatar}
        // username={user.username}
        // tag={user.tag}
        // location={user.location}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
        {...user}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
    </>
  );
};
