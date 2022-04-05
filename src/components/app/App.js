import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import { Component } from "react/cjs/react.production.min";

class App extends Component {


    state = {
        showRandomChar: true
    }



    toggleRondomChar=() => {
        this.setState((state)=>{
            return{
                showRandomChar: !this.state.showRandomChar
            }
        })
        console.log(this.state)
    }




    render() {
        console.log(this.toggleRondomChar)
        return (
            <div className="app">
                <AppHeader />
                <main>
                    {this.state.showRandomChar ? <RandomChar /> : null}
                    <button
                        onClick={this.toggleRondomChar}
                    >clik me</button>
                    <div className="char__content">
                        <CharList />
                        <CharInfo />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;