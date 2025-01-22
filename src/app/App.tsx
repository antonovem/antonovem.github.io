import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          каких целей хотите достичь <br />
          <i>Понять реакт и тайпскрипт</i>
          <br />
          <br />
          какими технологиями хотите овладеть (если нет конкретных запросов, пропустите этот пункт)<br />
          <i>Тайпскрипт, реакт, flex/grid верстки, в общем современное</i>
          <br />
          <br />
          какими технологиями уже владеете
          <br />
          <i>php, javascript, jquery :), bitrix</i>
          <br />
          <br />
          расскажите о себе и своем опыте
          <br />
          <i>Разрабатываю сайты с 2011 года от фулстека до ~2016. Там пошло разделеение и больше ушел в бэк.</i>
        </p>
      </header>
    </div>
  );
}

export default App;
