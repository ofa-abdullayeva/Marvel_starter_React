import {
    Switch,
    Route,
  } from "react-router-dom";
  
  import AppHeader from "../appHeader/AppHeader";
  import { MainPage, ComicsPage } from "../pages";
  
  
  const App = () => {
  
    return (
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/comics" component={ComicsPage} />
          </Switch>
        </main>
  
      </div>
    )
  }
  
  
  export default App;
// import { useState } from 'react';

// import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import {
//     Switch,
//     Route,
    
// } from "react-router-dom";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";

// import decoration from '../../resources/img/vision.png';
// import ErrorBoundary from "../errorBaundary/ErrorBoundary";
// import ComicsList from '../comicsList/ComicsList';
// import AppBanner from '../appBanner/AppBanner';

// const App = () => {
//     const [selectedChar, setSelectedChar] = useState(null)


//     const onCharSelected = (id) => {

//         setSelectedChar(id)

//     }

//     return (
//         <div className="app">

//             <AppHeader />

//             <main>
//                 <Switch>
//                     <Route exact path="/">
//                         <RandomChar />
//                         <div className="char__content">
//                             <CharList onCharSelected={onCharSelected} />
//                             <ErrorBoundary>
//                                 <CharInfo charId={selectedChar} />
//                             </ErrorBoundary>
//                         </div>
//                         <img className="bg-decoration" src={decoration} alt="vision" />
//                     </Route>

//                     <Route path="/comics">
//                         <AppBanner />
//                         <ComicsList />
//                     </Route>

//                 </Switch >
//             </main>

//         </div>
//     )
// }


// export default App;