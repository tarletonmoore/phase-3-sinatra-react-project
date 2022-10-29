import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import GameList from './GameList';
import NewGame from './NewGame';


function App() {
  const [games, setGames] = useState([])


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

        <h1>Nintendo Games</h1>
      </header>

      <NavBar />
      <Routes>

        <Route path="/games"
          element={<GameList
            games={games}
            // was displayed games
            onDeleteGame={handleDeleteGame}
            onUpdateGame={handleUpdateGame}
          />}>
        </Route>
        <Route path="/add"
          element={<NewGame
            onAddGame={handleAddGame}
            game={games}
          />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;


