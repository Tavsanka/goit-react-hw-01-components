import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import user from "../data/user.json";
import statsData from "../data/stats.json";
import friendsData from "../data/friends.json";
import transactionsData from "../data/transactions.json";

function App() {
  return (
    <>
      <h1>React Homework Template (Vite)</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
}

export default App;
