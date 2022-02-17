import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddList';

export interface MyState{
  people:{
    name:string;
    age:number,
    url:string;
    note?:string;
  }[]
}


function App() {

  const[people, setPeople] = useState<MyState["people"]>([
    {
      name: "Stephen Curry",
      url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
      age:33,
      note: "Best player of the entire NBA"
    }
  ])

  return (
    <div className="App">
      <h1>First Project</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
    
  );
}

export default App;
