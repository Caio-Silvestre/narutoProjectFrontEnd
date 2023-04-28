import React from 'react';
import './App.css';
import CharacterProvider from './contexts/characterContext';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Global from './styles/global';

function App() {
  return (<div className='App'>

    <Global/>
    <CharacterProvider>

      <Routes>
        <Route path={"*"} element={<Home/>}/>
        <Route path={"/home"} element={<Home/>} />
        <Route path={"/clans"} element={<Home/>} />
        <Route path={"/clans/:idClan"} element={<Home/>} />
        <Route path={"/shinobis"} element={<Home/>} />
        <Route path={"/shinobis/:idCharacter"} element={<Home/>} />
      </Routes>

    </CharacterProvider>
      </div>
    )
}

export default App;
