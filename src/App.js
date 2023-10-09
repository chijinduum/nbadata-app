import { Team } from "./team";
import { useEffect, useState } from "react";
import { fetchStatData } from "./request";
import "./team.css";
// import { fetchTeamData } from "./request";

function App() {
  // const [teams, setTeams] = useState([]);
  const [stats, setStats] = useState([]);
  const [index, setIndex] = useState(0);
  const stat = stats[index];
  const team = stat?.team;

  // const fetchTeams = async () => {
  //   const response = await fetchTeamData();
  //   setTeams(response);
  // };

  const fetchStats = async () => {
    const response = await fetchStatData();
    console.log({ response });

    const filteredStats = response.filter((stat) => {
      return ["Western Conference", "Eastern Conference"].includes(
        stat.group.name
      );
    });

    setStats(filteredStats);
  };

  const next = () => {
    if (index === stats.length - 1) {
      return;
    }

    setIndex(index + 1);
  };

  const previous = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
  };

  useEffect(() => {
    // fetchTeams();
    fetchStats();
  }, []);

  return (
    <div className="card-container">
      {/* {
        teams.map((team) => <Team logo={team.logo} name={team.name} key={team.id} />)
      } */}
      {team && (
        <Team
          logo={team.logo}
          name={team.name}
          key={team.id}
          previous={previous}
          next={next}
          position={stat.position}
          conference={stat.group.name}
          win={stat.games.win.total}
          lose={stat.games.lose.total}
          season={stat.league.season}
        />
      )}
    </div>
  );
}

export default App;
