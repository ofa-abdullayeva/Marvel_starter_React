import { Component } from 'react';

import MarvelServices from '../../services/MarvelServices';
import Error from '../Error/Error';
import Spinner from '../spinner/spinner';

// import abyss from '../../resources/img/abyss.jpg';
import './charList.scss';


class CharList extends Component {

    state = {
        characters: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelServices();

    getCharacList = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getCharacList();
    }

    onCharListLoaded = (chars) => {
        this.setState({
            characters: chars,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderedItems(arr) {
        const renderedItems = arr.map(item => {
            let imageStyle = { 'objectFit': 'cover' };
            if (item.thumbnail.includes('image_not_available')) {
                imageStyle = { 'objectFit': 'unset' };
            }
            return (
                <li
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}
                    className="char__item">
                    <img
                        src={item.thumbnail}
                        style={imageStyle}
                        alt={item.name} />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {renderedItems}
            </ul>
        )
    }


    render() {
        const { characters, error, loading } = this.state;
        const items = this.renderedItems(characters);
        const errorMesage = error ? <Error/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;
        return (
            <div className="char__list">
                {errorMesage}
                {spinner}
                {content}
                <button
                    className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;



// import './charList.scss';
// //import abyss from '../../resources/img/abyss.jpg';
// import MarvelServices from '../../services/MarvelServices';
// import Error from '../Error/Error';
// import { Component } from 'react';
// import Spinner from '../spinner/spinner';

// class CharList extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             characters: [],
//             loading: true,
//             error: false
//         }



//     }

//     marvelService = new MarvelServices();

//     getCharacterList = () => {
//         this.marvelService
//             .getAllCharacters()
//             .then(this.onCharListLoaded)
//             .catch(this.onError)
//     }

//     componentDidMount() {
//         this.getCharacterList()
//     }

//     onCharListLoaded = (chars) => {
//         this.setState({
//             characters: chars,
//             loading: false
//         })
//     }

//     onError = () => {
//         this.setState({
//             loading: false,
//             error: true
//         })
//     }


//     renderedItem(arr) {
//         const renderedItems = arr.map(item => {
//             return (
//                 <li className="char__item">
//                     <img src={item.thumbNail} alt="abyss" />
//                     <div className="char__name">{item.name}</div>
//                 </li>
//             )
//         });


//         return (
//             <ul className="char__grid">
//                 {renderedItems}
//             </ul>
//         )
//     }
//     render() {
//         const { characters, loading, error } = this.state
//         const items = this.renderedItems(characters)
//         const errorMesage = error ? <Error /> : null
//         const spinner = loading ? <Spinner /> : null
//         const content = !(loading || error) ? items : null

//         return (
//             <div className="char__list">
//                 {errorMesage}
//                 {spinner}
//                 {content}
//                 <button
//                     className="button button__main button__long">
//                     <div className="inner">load more</div>
//                 </button>
//             </div>
//         )
//     }
// }


// export default CharList;