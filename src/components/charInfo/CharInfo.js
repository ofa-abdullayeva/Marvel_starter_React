import { Component } from 'react';

import MarvelServices from '../../services/MarvelServices';
import Error from '../Error/Error';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/Skeleton';
//import thor from '../../resources/img/thor.jpeg';
import './charInfo.scss';




class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false

    }
    marvelService = new MarvelServices();
    
    componentDidMount() {
        this.updateChar()
    }

    // componentDidCatch(err,info){
    //     console.log(err,info)
    // }

  

    componentDidUpdate(prevPros, prevState) {
        if (this.props.charId !== prevPros.charId) {
          this.updateChar();
        }
      }

    updateChar = () => {
        const { charId } = this.props
        if (!charId) return;
        this.onCharLoading()
        this.marvelService.getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)

    }
    onCharLoading = (item) => {
        this.setState({
            loading: true
        })
    }

    onCharLoaded = (item) => {
        this.setState({
            char: item,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const { error, loading, char } = this.state;
        const skeleton = (char || error || loading) ? null : <Skeleton />
        const errorMesage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error || !char) ? <View char={char} /> : null;




        return (
            <div className="char__info">
                {skeleton}
                {errorMesage}
                {spinner}
                {content}
            </div>
        )
    }

}

const View = ({ char }) => {
    const { name, thumbnail, description, homepage, wiki, comics } = char;
    const desc = description ? description : "This character do not have a description";
    const noComics = comics.lenght>0 ? null : "No comics"
    let imageStyle = { 'objectFit': 'cover' };
    if (thumbnail.includes('image_not_available')) {
        imageStyle = { 'objectFit': 'unset' };
    }
    return (
        <>
            <div className="char__basics">
                <img 
                style={imageStyle}
                src={thumbnail} alt="abyss" />
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
                {desc}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {noComics}
                {comics.map((item, i) => {
                    return (
                        <li
                            key={i}
                            className="char__comics-item">
                            {item.name}
                        </li>
                    )
                })}
            </ul>

        </>
    )
}
export default CharInfo;