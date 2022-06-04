import React from 'react';
import './App.css';
import HeaderComponent from './component/headerComponent';
import ChatList from './component/chatList';
import MovieComponent from './component/movieComponent';
import FormComponent from './component/MoviesForm';


function App() {
  return (
    <div className="App">
          <HeaderComponent/>
          <ChatList/>
          <MovieComponent/>
          <FormComponent/>
    </div>
  );
}

export default App;
