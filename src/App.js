import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import PlayersList from "./components/PlayersList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MoreInfo from "./components/MoreInfo";

const API1 = "https://bcheung98.github.io/nba-player-db/players.json";
const API2 = "http://localhost:3000/team";

class App extends React.Component {
  state = {
    players: [],
    team: [],
  };

  componentDidMount() {
    fetch(API1)
      .then((r) => r.json())
      .then((players) => this.setState({ players }));
    fetch(API2)
      .then((r) => r.json())
      .then((team) => this.setState({ team }));
  }

  addPlayer = (player) => {
    if (!this.state.team.includes(player)) {
      fetch(API2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      })
        .then((r) => r.json())
        .then((player) =>
          this.setState({ team: [...this.state.team, player] })
        )
        .catch(() => window.alert(`${player.name} is already in your team!`));
    } else {
      return;
    }
  };

  removePlayer = (p) => {
    fetch(`http://localhost:3000/team/${p.id}`, {
      method: "DELETE",
    }).then(() =>
      this.setState({ team: [...this.state.team].filter((x) => x.id !== p.id) })
    );
  };

  render() {
    return (
      <div className="App">
        <header>
          <NavBar team={this.state.team} />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact path="/team"
              render={() => {
                return (
                  <PlayersList
                    players={this.state.team}
                    display={"team"}
                    removePlayer={this.removePlayer}
                  />
                );
              }}
            />
            <Route
              exact path="/players"
              render={() => {
                return (
                  <PlayersList
                    players={this.state.players}
                    display={"players"}
                  />
                );
              }}
            />
            <Route
              exact path="/players/:id"
              render={(routerProps) => {
                if (this.state.players.length !== 0) {
                  let player = this.state.players.find(
                    (player) => Number(routerProps.match.params.id) === player.id
                  );
                  return <MoreInfo player={player} addPlayer={this.addPlayer} />;
                }
                else {
                  return <Redirect to="/players" />
                }
              }}
            ></Route>
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
