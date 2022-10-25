import React, { useEffect, useState } from 'react';
import './App.css';
import GameList from './GameList';
import NewGame from './NewGame';
// import Search from './Search'

function App() {
  const [games, setGames] = useState([])
  // const [search, setSearch] = ("")

  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then((r) => r.json())
      .then((games) => setGames(games));
  }, []);


  function handleAddGame(newGame) {
    setGames([...games, newGame]);
  }

  function handleDeleteGame(id) {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
  }

  function handleUpdateGame(updatedGameObj) {
    const updatedGames = games.map((game) => {
      if (game.id === updatedGameObj.id) {
        return updatedGameObj;
      } else {
        return game;
      }
    });
    setGames(updatedGames);
  }

  const displayedGames = games.filter((game) =>
    game
    // .toLowerCase()
    // .includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Nintendo Series</h1>
      </header>
      {/* <Search
        search={search}
        setSearch={setSearch}
      /> */}
      <GameList
        games={displayedGames}
        onDeleteGame={handleDeleteGame}
        onUpdateGame={handleUpdateGame}
      />
      <NewGame
        onAddGame={handleAddGame}
      />
    </div>
  );
}

export default App;


