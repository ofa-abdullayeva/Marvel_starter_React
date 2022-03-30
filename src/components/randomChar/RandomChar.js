import './randomChar.scss';
//import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelServices from '../../services/MarvelServices';
import { Component } from 'react';


class RandomChar extends Component {
    constructor(props){
        super(props);

        this.state = {

            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null

        }

        this.updateCharacter();
        // this.updateDesc();
    }


    marvelService = new MarvelServices();
    

    updateCharacter = () =>{
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService.getCharacter(id)
        .then(res =>this.setState({
            name: res.data.results[0].name,
            description: res.data.results[0].description,
            thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
            homepage: res.data.results[0].urls[0].url,
            wiki: res.data.results[0].urls[1].url

        }))
    }

    // updateDesc =()=> {
    //     let description = this.state.description; 

    //     if( !description == null  ){
    //         return  description.slice(0,150)
          
    //     }
    //     else if ( description == null ){
    //         return description = <h2>Data yoxdur</h2>
    //     }
      
        
    // }
    
   render() {

        const {name,description, thumbnail,homepage,wiki} = this.state;

    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                       {description?description.slice(0,150):"Description Not Found"}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>

    )
   }
   
}

export default RandomChar;