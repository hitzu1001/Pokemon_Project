import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_exp: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_exp: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_exp: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_exp: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_exp: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_exp: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_exp: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_exp: 65},

      {id: 37, name: 'Vulpix', type: 'fire', base_exp: 63},
      {id: 54, name: 'Psyduck', type: 'water', base_exp: 80},
      {id: 116, name: 'Horsea', type: 'water', base_exp: 83},
      {id: 147, name: 'Dratini', type: 'dragon', base_exp: 67},
    ]
  };

  // no arrow for reduce
  totalExp(totalExp, pokemonObj) {
      return totalExp + pokemonObj.base_exp;
  }

  render() {
    let total = [ ...this.props.pokemon ];
    let hand1 = [];
    let hand2 = [];
    while(hand1.length != 4) {
      let randIdx1 = Math.floor(Math.random() * total.length);
      hand1.push(total.splice(randIdx1, 1)[0]);
      let randIdx2 = Math.floor(Math.random() * total.length);
      hand2.push(total.splice(randIdx2, 1)[0]);
    }
    // while(hand1.length < hand2.length) {
    //   let randIdx = Math.floor(Math.random() * hand2.length);
    //   let randPokemon = hand2.splice(randIdx, 1)[0];
    //   hand1.push(randPokemon);
    // }

    // let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
    // let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
    let exp1 = hand1.reduce(this.totalExp, 0);
    let exp2 = hand2.reduce(this.totalExp, 0);
    

    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2}/>
      </div>
    )
  }
}

export default Pokegame;