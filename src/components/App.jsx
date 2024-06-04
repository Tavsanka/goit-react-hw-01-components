import Profile from "./Profile";
import Statistics from "./Statistics";
import user from "../data/user.json";
import statsData from "../data/stats.json";

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
    </>
  );
}

export default App;
