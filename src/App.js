import logo from './logo.svg';
import './App.css';
import { CrudLayout } from './components/CrudLayout';
import { useState } from 'react';
import { CrudView } from './components/CrudView';
import { UsersPage } from './poc/usersPage';

function App() {
  return(
    <>
      <UsersPage/>
    </>
  )
}

export default App;
