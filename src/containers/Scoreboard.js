import React, { Component } from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';


export default class Scoreboard extends Component {

    state = {
        players: [
          {
            name: 'Player One',
            score: 22,
          },
          {
            name: 'Player Two',
            score: 25,
          },
          {
            name: 'Player Three',
            score: 35,
          },
        ],
      }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = (name) => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  };

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
};
