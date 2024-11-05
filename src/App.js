import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Friend from './components/Friend/Friend';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [friends, setFriends] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setFriends(data));
  }, []);
  return (
    <>
      <h1>Friends: {friends.length}</h1>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </>
  );
}

export default App;
