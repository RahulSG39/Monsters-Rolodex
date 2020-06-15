import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchList } from './components/search-list/search-list.component'

class App extends React.Component{
constructor(){
  super();
  this.state = {
    monsters: [],
    searchField : ''
  };

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

  render(){
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchList placeholder ="Search Monsters" handleChange = {e => this.setState({ searchField : e.target.value})} />
          <CardList monsters = {filteredMonsters} />
        </div>
    )
  }
}

export default App;
