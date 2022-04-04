import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';
///import MarvelServices from './services/MarvelServices';



//const marvelServices = new MarvelServices();


//marvelServices.getAllCharacters().then(res => console.log(res));

//1011031
//marvelServices.getCharacter(1011031).then(res => console.log(res.data.results[0]));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

