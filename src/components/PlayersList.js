import React from "react";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Player from "./Player";
import DraftedPlayer from "./DraftedPlayer";

class PlayersList extends React.Component {
  state = {
    sort: "last-name-AZ",
    filters: {
      players: "",
      team: "all",
      position: "all",
      draft: "all",
      college: "all",
      country: "all",
      showFA: false
    },
  };

  heightToInches = (height) => {
    height = height.split("-");
    return parseInt(height[0]) * 12 + parseInt(height[1]);
  };

  setSortSettings = (e) => {
    this.setState({ sort: e.target.value }, () => this.sortPlayers());
  };

  sortPlayers = () => {
    let players = [...this.props.players];
    switch (this.state.sort) {
      case "last-name-AZ":
        players.sort((a, b) => a.name.split(" ").slice(0, 2).reverse().join(" ") < b.name.split(" ").slice(0, 2).reverse().join(" ") ? -1 : 1);
        break;
      case "last-name-ZA":
        players.sort((a, b) => a.name.split(" ").slice(0, 2).reverse().join(" ") < b.name.split(" ").slice(0, 2).reverse().join(" ") ? 1 : -1);
        break;
      case "first-name-AZ":
        players.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "first-name-ZA":
        players.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "height-asc":
        players.sort((a, b) => this.heightToInches(a.height) - this.heightToInches(b.height));
        break;
      case "height-desc":
        players.sort((a, b) => this.heightToInches(b.height) - this.heightToInches(a.height));
        break;
      case "weight-asc":
        players.sort((a, b) => a.weight - b.weight);
        break;
      case "weight-desc":
        players.sort((a, b) => b.weight - a.weight);
        break;
      default:
        break;
    }
    return players;
  };

  searchPlayer = (e) => {
    this.setState({ filters: { ...this.state.filters, players: e.target.value } });
  }

  setTeamFilters = (e) => {
    this.setState({ filters: { ...this.state.filters, team: e.target.value } });
  }

  setPositionFilters = (e) => {
    this.setState({ filters: { ...this.state.filters, position: e.target.value } });
  }

  setDraftFilters = (e) => {
    this.setState({ filters: { ...this.state.filters, draft: e.target.value } });
  }

  setCollegeFilters = (e) => {
    this.setState({ filters: { ...this.state.filters, college: e.target.value } });
  }

  setCountryFilters = (e) => {
    this.setState({ filters: { ...this.state.filters, country: e.target.value } });
  }

  showFA = () => {
    this.setState({ filters: { ...this.state.filters, showFA: !this.state.filters.showFA } });
  }

  getColleges = () => {
    let colleges = []
    for (let p of this.props.players) {
      !colleges.includes(p.from) && colleges.push(p.from);
    }
    colleges.sort((a, b) => a.localeCompare(b));
    return colleges;
  }

  getCountries = () => {
    let countries = []
    for (let p of this.props.players) {
      !countries.includes(p.country) && countries.push(p.country);
    }
    countries.sort((a, b) => a.localeCompare(b));
    return countries;
  }

  filterPlayers = () => {
    let players = this.sortPlayers();
    if (this.state.filters.players !== "") {
      players = players.filter(p => p.name.toLowerCase().includes(this.state.filters.players.toLowerCase()));
    }
    if (this.state.filters.team !== "all") {
      players = players.filter(p => this.state.filters.team === p.team);
    }
    if (this.state.filters.position !== "all") {
      players = players.filter(p => p.position.split("/").includes(this.state.filters.position));
    }
    if (this.state.filters.draft !== "all") {
      players = players.filter(p => this.state.filters.draft === p.draft.split(" ")[0]);
    }
    if (this.state.filters.college !== "all") {
      players = players.filter(p => this.state.filters.college === p.from);
    }
    if (this.state.filters.country !== "all") {
      players = players.filter(p => this.state.filters.country === p.country);
    }
    if (!this.state.filters.showFA) {
      players = players.filter(p => p.team !== "FA")
    }
    return players;
  };

  render() {
    return (
      <div className="main-page">
        {this.props.display === "players" ? <h1>Players</h1> : <h1>My Team</h1>}
        <div>
          <input
            onChange={this.searchPlayer}
            type="text"
            placeholder="Search for a player"
          />
        </div>
        <Filters
          setTeam={this.setTeamFilters}
          setPosition={this.setPositionFilters}
          setDraftYear={this.setDraftFilters}
          setCollege={this.setCollegeFilters}
          colleges={this.getColleges()}
          setCountry={this.setCountryFilters}
          countries={this.getCountries()}
        />
        <input onChange={this.showFA} type="checkbox" /><b>Show Free Agents</b>
        <SortBar onChange={this.setSortSettings} />
        <div className="player-display">
          <div className="player-container">
            {this.props.display === "players"
              ? this.filterPlayers().map((player) => (
                <Player key={player.id} player={player} />
              ))
              : this.filterPlayers().map((player) => (
                <DraftedPlayer
                  key={player.id}
                  player={player}
                  removePlayer={this.props.removePlayer}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersList;
