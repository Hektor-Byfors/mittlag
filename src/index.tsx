import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Activities } from './components/Activities/Activities';
import { Header } from './components/Header/Header'
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Team } from './components/Team/Team';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<Navigate to='/aktiviteter'/>}/>
          <Route path='/aktiviteter' element={<Activities/>} />
          <Route path='/nyhetsflode' element={<News/>} />
          <Route path='/lagmedlemmar' element={<Team/>} />
          <Route path='/minprofil' element={<Profile/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
