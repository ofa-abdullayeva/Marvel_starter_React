import './charInfo.scss';
//import thor from '../../resources/img/thor.jpeg';
import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null,
            comics: null,
        }

        this.updateCharInfo()
    }

    marvelService = new MarvelServices();


    updateCharInfo = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService.getCharacter(id)
            .then(res => this.setState({
                name: res.data.results[0].name,
                description: res.data.results[0].description,
                thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
                homepage: res.data.results[0].urls[0].url,
                wiki: res.data.results[0].urls[1].url,
               //comics: res.data.results[0].comics.items 
            }))

    
    }

    render() {

        const { name, description, thumbnail, homepage, wiki } = this.state;
        return (
            <div className="char__info">
                <div className="char__basics">
                    <img src={thumbnail} alt="abyss" />
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {/* {
                        comics.map(item => {
                            return (
                                <li className="char__comics-item">
                                    ${item}
                                </li>
                            )
                        })
                    } */}
                    <li className="char__comics-item">

                        All-Winners Squad: Band of Heroes (2011) #3
                    </li>
                    <li className="char__comics-item">
                        Alpha Flight (1983) #50
                    </li>
                    <li className="char__comics-item">
                        Amazing Spider-Man (1999) #503
                    </li>
                    <li className="char__comics-item">
                        Amazing Spider-Man (1999) #504
                    </li>
                    <li className="char__comics-item">
                        AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                    </li>
                    <li className="char__comics-item">
                        Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                    </li>
                    <li className="char__comics-item">
                        Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                    </li>
                    <li className="char__comics-item">
                        Vengeance (2011) #4
                    </li>
                    <li className="char__comics-item">
                        Avengers (1963) #1
                    </li>
                    <li className="char__comics-item">
                        Avengers (1996) #1
                    </li> 
                </ul>
            </div >
        )
    }
}

export default CharInfo;